import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { getSesionActual } from "@/services/auth/sesion-actual";

export default async function AppGroupLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sesion, cookieStore] = await Promise.all([
    getSesionActual(),
    cookies(),
  ]);
  const entrada = cookieStore.get("bolsines_entrada")?.value === "1";

  return (
    <AppShell sesion={sesion} entrada={entrada}>
      {children}
    </AppShell>
  );
}
