"use client";

import { usePathname } from "next/navigation";
import { getDestinoActivo, type Destino } from "@/lib/navigation";

export function useDestinoActivo(): Destino | undefined {
  const pathname = usePathname();
  return getDestinoActivo(pathname);
}
