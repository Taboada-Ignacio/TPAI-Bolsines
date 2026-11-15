BEGIN;

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sesion" (
    "id" SERIAL NOT NULL,
    "fecha_hora_inicio" TIMESTAMPTZ(3) NOT NULL,
    "fecha_hora_fin" TIMESTAMPTZ(3),
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "sesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empleado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "rol_id" INTEGER NOT NULL,
    "comision_medica_id" INTEGER NOT NULL,

    CONSTRAINT "empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rol" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comision_medica" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "comision_medica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolsin" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMPTZ(3) NOT NULL,
    "numero_bolsin" INTEGER NOT NULL,
    "numero_precinto" INTEGER NOT NULL,
    "peso" DOUBLE PRECISION NOT NULL,
    "cm_origen_id" INTEGER NOT NULL,
    "cm_destino_id" INTEGER NOT NULL,

    CONSTRAINT "bolsin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cambio_estado_bolsin" (
    "id" SERIAL NOT NULL,
    "fecha_hora_inicio" TIMESTAMPTZ(3) NOT NULL,
    "fecha_hora_fin" TIMESTAMPTZ(3),
    "bolsin_id" INTEGER NOT NULL,
    "estado_id" INTEGER NOT NULL,
    "responsable_ce_id" INTEGER NOT NULL,

    CONSTRAINT "cambio_estado_bolsin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ambito" TEXT NOT NULL,

    CONSTRAINT "estado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sesion_usuario_id_idx" ON "sesion"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "empleado_usuario_id_key" ON "empleado"("usuario_id");

-- CreateIndex
CREATE INDEX "empleado_rol_id_idx" ON "empleado"("rol_id");

-- CreateIndex
CREATE INDEX "empleado_comision_medica_id_idx" ON "empleado"("comision_medica_id");

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombre_key" ON "rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "comision_medica_codigo_key" ON "comision_medica"("codigo");

-- CreateIndex
CREATE INDEX "bolsin_cm_destino_id_idx" ON "bolsin"("cm_destino_id");

-- CreateIndex
CREATE UNIQUE INDEX "bolsin_cm_origen_id_numero_bolsin_key" ON "bolsin"("cm_origen_id", "numero_bolsin");

-- CreateIndex
CREATE INDEX "cambio_estado_bolsin_bolsin_id_idx" ON "cambio_estado_bolsin"("bolsin_id");

-- CreateIndex
CREATE INDEX "cambio_estado_bolsin_estado_id_idx" ON "cambio_estado_bolsin"("estado_id");

-- CreateIndex
CREATE INDEX "cambio_estado_bolsin_responsable_ce_id_idx" ON "cambio_estado_bolsin"("responsable_ce_id");

-- CreateIndex
CREATE UNIQUE INDEX "estado_nombre_ambito_key" ON "estado"("nombre", "ambito");

-- AddForeignKey
ALTER TABLE "sesion" ADD CONSTRAINT "sesion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_comision_medica_id_fkey" FOREIGN KEY ("comision_medica_id") REFERENCES "comision_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolsin" ADD CONSTRAINT "bolsin_cm_origen_id_fkey" FOREIGN KEY ("cm_origen_id") REFERENCES "comision_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolsin" ADD CONSTRAINT "bolsin_cm_destino_id_fkey" FOREIGN KEY ("cm_destino_id") REFERENCES "comision_medica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cambio_estado_bolsin" ADD CONSTRAINT "cambio_estado_bolsin_bolsin_id_fkey" FOREIGN KEY ("bolsin_id") REFERENCES "bolsin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cambio_estado_bolsin" ADD CONSTRAINT "cambio_estado_bolsin_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cambio_estado_bolsin" ADD CONSTRAINT "cambio_estado_bolsin_responsable_ce_id_fkey" FOREIGN KEY ("responsable_ce_id") REFERENCES "empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

COMMIT;
