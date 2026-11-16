"use client";

import type { ReactNode, RefObject } from "react";
import { BottomSheet } from "@/components/ui/surfaces/BottomSheet";
import {
  SideSheet,
  type SideSheetSide,
  type SideSheetSize,
} from "@/components/ui/surfaces/SideSheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export interface ResponsiveSheetProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  side?: SideSheetSide;
  size?: SideSheetSize;
  className?: string;
  panelRef?: RefObject<HTMLDivElement | null>;
}

/** Muestra SideSheet en escritorio (>= 768px) y BottomSheet en móvil (< 768px). */
export function ResponsiveSheet({
  side,
  size,
  ...props
}: ResponsiveSheetProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <SideSheet side={side} size={size} {...props} />;
  }

  return <BottomSheet {...props} />;
}
