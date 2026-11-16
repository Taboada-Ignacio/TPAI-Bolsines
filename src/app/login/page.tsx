import type { Metadata } from "next";
import { LoginView } from "@/components/login/LoginView";

export const metadata: Metadata = {
  title: "Ingresar — TPAI Bolsines",
  description: "Acceso al sistema de gestión y seguimiento de bolsines.",
};

export default function LoginPage() {
  return <LoginView />;
}
