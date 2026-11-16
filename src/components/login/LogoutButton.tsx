"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/actions/Button";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="secondary"
      size="md"
      loading={loading}
      leftIcon={<LogOut className="size-4" />}
      onClick={handleLogout}
    >
      {loading ? "Cerrando sesión…" : "Cerrar sesión"}
    </Button>
  );
}
