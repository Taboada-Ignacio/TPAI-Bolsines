"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { IconButton } from "@/components/ui/actions/IconButton";
import { THEME_COLOR_BY_TEMA, THEME_COOKIE_NAME, type Tema } from "@/lib/theme";

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  return () => {
    observer.disconnect();
    mql.removeEventListener("change", callback);
  };
}

function getThemeSnapshot(): Tema {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "dark" || explicit === "light") {
    return explicit;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Tema {
  return "light";
}

export function ThemeToggle() {
  const tema = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const isDark = tema === "dark";

  function handleToggle() {
    const next: Tema = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.cookie = `${THEME_COOKIE_NAME}=${next}; path=/; max-age=31536000; samesite=lax`;

    const metas = document.querySelectorAll('meta[name="theme-color"]');
    metas.forEach((meta) => {
      meta.setAttribute("content", THEME_COLOR_BY_TEMA[next]);
    });
  }

  return (
    <IconButton
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      onClick={handleToggle}
    >
      {isDark ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </IconButton>
  );
}
