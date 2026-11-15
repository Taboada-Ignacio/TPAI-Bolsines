#Requires -Version 7.0
param([string]$Proyecto, [switch]$BaseVacia)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = $OutputEncoding
$compose = @('compose')
if ($Proyecto) { $compose += @('-p', $Proyecto) }
$api = 'http://localhost:3000/api'

function Invoke-Compose {
    docker @compose @args
    if ($LASTEXITCODE -ne 0) { throw "Docker Compose falló con código $LASTEXITCODE." }
}

function Invoke-Sql([string]$Sql) {
    $Sql | docker @compose exec -T -e PGCLIENTENCODING=UTF8 postgres sh -c 'exec psql -XqAt -v ON_ERROR_STOP=1 -U "$POSTGRES_USER" -d "$POSTGRES_DB"'
    if ($LASTEXITCODE -ne 0) { throw "PostgreSQL falló con código $LASTEXITCODE." }
}

function Assert-True([bool]$Condicion, [string]$Mensaje) {
    if (-not $Condicion) { throw $Mensaje }
}

function Get-Empleados {
    $respuesta = Invoke-WebRequest "$api/empleados" -TimeoutSec 10 -MaximumRetryCount 4 -RetryIntervalSec 2
    Assert-True ($respuesta.StatusCode -eq 200) 'GET /api/empleados debe responder 200.'
    ConvertFrom-Json -InputObject ($OutputEncoding.GetString($respuesta.RawContentStream.ToArray()))
}

$demo = @(
    @{ nombre = 'Martín'; apellido = 'Fernández'; usuario = 'parametrizador.demo'; rol = 'Parametrizador del sistema'; codigo = 'CM-CABA' }
    @{ nombre = 'Lucía'; apellido = 'González'; usuario = 'documentacion.demo'; rol = 'Encargado de Documentación'; codigo = 'CM-CBA' }
    @{ nombre = 'Nicolás'; apellido = 'Rodríguez'; usuario = 'bolsines.demo'; rol = 'Encargado de Bolsines'; codigo = 'CM-CBA' }
    @{ nombre = 'Carolina'; apellido = 'Martínez'; usuario = 'gerente.demo'; rol = 'Gerente de Comisión Médica'; codigo = 'CM-SF' }
)

function Get-Snapshot {
    Invoke-Sql @'
SELECT (SELECT count(*) FROM public.rol),
       (SELECT count(*) FROM public.estado),
       (SELECT count(*) FROM public.comision_medica),
       (SELECT count(*) FROM public.empleado),
       (SELECT count(*) FROM public.usuario);
SELECT e.id, u.id, e.nombre, e.apellido, e.email, u.nombre, r.nombre, c.codigo, c.nombre
FROM public.empleado e
JOIN public.usuario u ON u.id = e.usuario_id
JOIN public.rol r ON r.id = e.rol_id
JOIN public.comision_medica c ON c.id = e.comision_medica_id
WHERE e.email IN ('parametrizador.demo@example.com', 'documentacion.demo@example.com',
                  'bolsines.demo@example.com', 'gerente.demo@example.com')
ORDER BY e.email, e.id;
SELECT (SELECT md5(coalesce(json_agg(e ORDER BY e.id)::text, '[]')) FROM public.empleado e),
       (SELECT md5(coalesce(json_agg(u ORDER BY u.id)::text, '[]')) FROM public.usuario u);
'@
}

Invoke-Compose up --build -d
Invoke-Compose ps -a
Invoke-Compose logs migrate
$primero = @(Get-Snapshot)
Assert-True ($primero.Count -eq 6) 'Se esperaban cuatro empleados de demostración en PostgreSQL.'
$primero[0..4] | Write-Output
if ($BaseVacia) {
    Assert-True ($primero[0] -eq '4|5|24|4|4') 'Los conteos de la base nueva no coinciden con el seed.'
}
foreach ($esperado in $demo) {
    $email = "$($esperado.usuario)@example.com"
    $filas = @($primero | Where-Object {
        $c = $_ -split '\|'
        $c.Count -eq 9 -and $c[2] -ceq $esperado.nombre -and $c[3] -ceq $esperado.apellido -and
            $c[4] -ceq $email -and $c[5] -ceq $esperado.usuario -and
            $c[6] -ceq $esperado.rol -and $c[7] -ceq $esperado.codigo
    })
    Assert-True ($filas.Count -eq 1) "Asociaciones SQL incorrectas para $email."
}

Invoke-Compose up --build -d
# Ejecutar el mismo servicio garantiza una segunda carga aunque Compose reutilice el contenedor.
Invoke-Compose run --rm --no-deps migrate
$segundo = @(Get-Snapshot)
Assert-True (($primero -join "`n") -ceq ($segundo -join "`n")) 'La segunda carga cambió los catálogos o los empleados y usuarios.'
$empleados = @(Get-Empleados)
foreach ($esperado in $demo) {
    $email = "$($esperado.usuario)@example.com"
    $filas = @($empleados | Where-Object email -CEQ $email)
    Assert-True ($filas.Count -eq 1) "GET debe devolver un registro para $email."
    $fila = $filas[0]
    Assert-True ($fila.nombre -ceq $esperado.nombre -and $fila.apellido -ceq $esperado.apellido -and
        $fila.usuario.nombre -ceq $esperado.usuario -and $fila.rol.nombre -ceq $esperado.rol -and
        $fila.comisionMedica.codigo -ceq $esperado.codigo -and
        $null -eq $fila.usuario.PSObject.Properties['contrasena']) "Respuesta incorrecta para $email."
}
Write-Output 'Segunda carga y GET de empleados verificados.'

$token = [guid]::NewGuid().ToString('N')
$emailTemporal = "transaccion.$token@example.com"
$nombreUsuario = "transaccion.$token"
$referencia = $empleados | Where-Object email -CEQ 'bolsines.demo@example.com' | Select-Object -First 1
$cuerpo = @{
    nombre = 'Prueba transaccional'; apellido = 'Temporal'; email = $emailTemporal
    usuario = @{ nombre = $nombreUsuario; contrasena = '123456' }
    rolId = $referencia.rol.id; comisionMedicaId = $referencia.comisionMedica.id
} | ConvertTo-Json -Depth 4
[int]$empleadoId = 0
[int]$usuarioId = 0
[int]$sesionId = 0
try {
    $alta = Invoke-WebRequest "$api/empleados" -Method Post -ContentType 'application/json; charset=utf-8' -Body $cuerpo -TimeoutSec 20
    Assert-True ($alta.StatusCode -eq 201) 'El alta temporal debe responder 201.'
    $registro = $alta.Content | ConvertFrom-Json
    Assert-True ($registro.email -ceq $emailTemporal -and $registro.usuario.nombre -ceq $nombreUsuario) 'El alta devolvió otra identidad.'
    $empleadoId = $registro.id
    $usuarioId = $registro.usuario.id
    Assert-True ($empleadoId -gt 0 -and $usuarioId -gt 0) 'El alta no devolvió IDs válidos.'
    $sesionId = Invoke-Sql "INSERT INTO public.sesion (usuario_id, fecha_hora_inicio, fecha_hora_fin) SELECT id, now(), NULL FROM public.usuario WHERE id = $usuarioId AND nombre = '$nombreUsuario' RETURNING id;"
    Assert-True ($sesionId -gt 0) 'La sesión temporal no se creó.'
    Write-Output "Empleado=$empleadoId Usuario=$usuarioId Sesión=$sesionId"
    $conflicto = Invoke-WebRequest "$api/empleados/$empleadoId" -Method Delete -SkipHttpErrorCheck -TimeoutSec 20
    Write-Output "DELETE con sesión: $($conflicto.StatusCode)"
    Assert-True ($conflicto.StatusCode -eq 409) 'La sesión debe impedir la eliminación con HTTP 409.'
    $relacion = Invoke-Sql "SELECT count(*) FROM public.empleado e JOIN public.usuario u ON u.id = e.usuario_id JOIN public.sesion s ON s.usuario_id = u.id WHERE e.id = $empleadoId AND e.email = '$emailTemporal' AND u.id = $usuarioId AND u.nombre = '$nombreUsuario' AND s.id = $sesionId AND s.fecha_hora_fin IS NULL;"
    Assert-True ($relacion -eq '1') 'La reversión no conservó los tres registros relacionados.'
    Write-Output 'La reversión conservó el empleado, el usuario y la sesión.'
} finally {
    if ($empleadoId -le 0 -or $usuarioId -le 0) {
        $identidad = @(Invoke-Sql "SELECT e.id, u.id FROM public.empleado e JOIN public.usuario u ON u.id = e.usuario_id WHERE e.email = '$emailTemporal' AND u.nombre = '$nombreUsuario';")
        Assert-True ($identidad.Count -le 1) 'La identidad temporal no es inequívoca.'
        if ($identidad.Count -eq 1) {
            $empleadoId, $usuarioId = ($identidad[0] -split '\|') | ForEach-Object { [int]$_ }
        }
    }
    if ($sesionId -gt 0) {
        Invoke-Sql "DELETE FROM public.sesion WHERE id = $sesionId AND usuario_id = $usuarioId AND EXISTS (SELECT 1 FROM public.usuario WHERE id = $usuarioId AND nombre = '$nombreUsuario');"
    }
    if ($empleadoId -gt 0 -and $usuarioId -gt 0) {
        $esTemporal = Invoke-Sql "SELECT count(*) FROM public.empleado WHERE id = $empleadoId AND usuario_id = $usuarioId AND email = '$emailTemporal';"
        if ($esTemporal -eq '1') {
            $baja = Invoke-WebRequest "$api/empleados/$empleadoId" -Method Delete -SkipHttpErrorCheck -TimeoutSec 20
            Write-Output "DELETE sin sesión: $($baja.StatusCode)"
            Assert-True ($baja.StatusCode -eq 204) 'La limpieza esperaba HTTP 204.'
        }
    }
    $restantes = Invoke-Sql "SELECT (SELECT count(*) FROM public.empleado WHERE email = '$emailTemporal') + (SELECT count(*) FROM public.usuario WHERE nombre = '$nombreUsuario') + (SELECT count(*) FROM public.sesion WHERE usuario_id = $usuarioId);"
    Assert-True ($restantes -eq '0') 'Quedaron registros temporales.'
    Write-Output 'Limpieza confirmada en PostgreSQL.'
}
