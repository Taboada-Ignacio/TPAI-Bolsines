BEGIN;

LOCK TABLE public.usuario IN SHARE MODE;

DO $$
BEGIN
  IF EXISTS (SELECT nombre FROM public.usuario GROUP BY nombre HAVING count(*) > 1) THEN
    RAISE EXCEPTION 'Hay nombres de usuario duplicados. Resolverlos manualmente antes de aplicar esta migración.';
  END IF;
END;
$$;

CREATE UNIQUE INDEX "usuario_nombre_key" ON public.usuario("nombre");

COMMIT;
