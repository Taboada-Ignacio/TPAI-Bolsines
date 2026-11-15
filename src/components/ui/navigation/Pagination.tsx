"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/actions/IconButton";
import { cn } from "@/lib/cn";

export interface PaginationProps {
  page: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/** Barra de paginado accesible con rango visible y navegación por página. */
export function Pagination({
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Paginación"
      className={cn(
        "mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2",
        className,
      )}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        Mostrando {startItem}–{endItem} de {totalItems}
      </span>

      <div className="flex items-center gap-1 self-start sm:self-auto">
        <IconButton
          aria-label="Página anterior"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-full"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </IconButton>

        {pages.map((p) => {
          const active = p === page;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={active ? "page" : undefined}
              aria-label={`Página ${p}`}
              className={cn(
                "size-9 rounded-full font-mono text-xs font-semibold tabular-nums cursor-pointer",
                "transition-[background-color,color,transform] duration-150",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                active
                  ? "bg-lime text-on-lime border border-lime-edge"
                  : "text-muted hover:text-fg hover:bg-hover active:scale-95",
              )}
            >
              {p}
            </button>
          );
        })}

        <IconButton
          aria-label="Página siguiente"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded-full"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </IconButton>
      </div>
    </nav>
  );
}
