import type { HealthResponse } from "@/dtos/health.dto";

export function GET(): Response {
  const health: HealthResponse = {
    status: "ok",
    application: "TPAI-Bolsines",
  };

  return Response.json(health);
}
