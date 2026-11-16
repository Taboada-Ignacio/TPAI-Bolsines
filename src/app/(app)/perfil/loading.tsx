import { PageBody } from "@/components/layout/PageBody";
import { Skeleton } from "@/components/ui/feedback/Skeleton";

export default function PerfilLoading() {
  return (
    <PageBody variant="padded">
      <div aria-busy="true" aria-label="Cargando perfil">
        <div>
          <Skeleton className="h-3 w-36" />
          <Skeleton className="mt-3 h-12 w-56 max-w-full" />
          <Skeleton className="mt-3 h-6 w-72 max-w-full" />
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
          {/* Esqueleto isla de sesión */}
          <div className="rounded-[20px] border border-edge bg-surface p-6 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-4">
              <Skeleton className="size-14 shrink-0 rounded-[16px]" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-5 w-40 max-w-full" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>

            <div className="border-t border-hair divide-y divide-hair">
              <div className="py-3 flex items-center justify-between gap-4">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-36" />
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
              <div className="py-3 flex items-center justify-between gap-4">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>

            <div className="pt-2 border-t border-hair">
              <Skeleton className="h-11 w-full rounded-full" />
            </div>
          </div>

          {/* Esqueleto isla de formulario */}
          <div className="rounded-[20px] border border-edge bg-surface p-6">
            <div className="mb-5 pb-4 border-b border-hair space-y-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-6 w-48 max-w-full" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-11 w-full rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-11 w-full rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <Skeleton className="h-3 w-14" />
                <Skeleton className="h-11 w-full rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-12" />
                  <Skeleton className="h-11 w-full rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-11 w-full rounded-full" />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Skeleton className="h-11 w-full sm:w-40 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBody>
  );
}
