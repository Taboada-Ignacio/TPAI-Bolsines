import { PageBody } from "@/components/layout/PageBody";
import { Skeleton } from "@/components/ui/feedback/Skeleton";

export default function AppLoading() {
  return (
    <PageBody variant="padded">
      <div aria-busy="true" aria-label="Cargando pantalla">
        <Skeleton className="h-3 w-44" />
        <Skeleton className="mt-3 h-14 w-72 max-w-full" />
        <Skeleton className="mt-2 h-14 w-56 max-w-full" />
        <Skeleton className="mt-3 h-5 w-36" />

        <div className="mt-7 border-t border-hair">
          <div className="py-4 px-2.5 border-b border-hair flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-8" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3.5 w-64 max-w-[60vw]" />
              </div>
            </div>
            <Skeleton className="size-[38px] rounded-[12px]" />
          </div>
          <div className="py-4 px-2.5 border-b border-hair flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-8" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3.5 w-52 max-w-[55vw]" />
              </div>
            </div>
            <Skeleton className="size-[38px] rounded-[12px]" />
          </div>
        </div>
      </div>
    </PageBody>
  );
}
