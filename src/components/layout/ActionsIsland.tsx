"use client";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { UserMenu } from "@/components/layout/UserMenu";
import { Island } from "@/components/ui/surfaces/Island";
import type { SesionVista } from "@/services/auth/sesion-actual";

export interface ActionsIslandProps {
  sesion: SesionVista;
}

export function ActionsIsland({ sesion }: ActionsIslandProps) {
  return (
    <Island className="h-[var(--top-h)] rounded-[var(--top-r)] flex items-center gap-0.5 px-[5px]">
      <div id="page-actions" className="flex items-center gap-0.5" />
      <ThemeToggle />
      <div className="md:hidden ml-[3px]">
        <UserMenu sesion={sesion} compact />
      </div>
    </Island>
  );
}
