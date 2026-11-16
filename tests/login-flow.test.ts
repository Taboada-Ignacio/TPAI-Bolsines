import { describe, expect, it } from "vitest";
import { loginFlowReducer, type LoginState } from "@/hooks/useLoginFlow";

const MOCK_SESSION = {
  usuario: { id: 31, nombre: "mgomez" },
  empleado: { id: 19, nombre: "Marcelo", apellido: "Gómez" },
  rol: { id: 21, nombre: "Encargado de Bolsines" },
  comisionMedica: { id: 42, codigo: "COR", nombre: "CM Córdoba" },
  sesion: { id: 73, fechaHoraInicio: "2026-11-15T03:00:00.000Z" },
};

describe("loginFlowReducer", () => {
  it("transiciona de idle a submitting", () => {
    const next = loginFlowReducer({ status: "idle" }, { type: "SUBMIT" });
    expect(next).toEqual({ status: "submitting" });
  });

  it("transiciona a invalid con errores por campo (A1)", () => {
    const next = loginFlowReducer(
      { status: "idle" },
      {
        type: "INVALID",
        campos: { usuario: "Ingresá tu usuario." },
      },
    );
    expect(next).toEqual({
      status: "invalid",
      campos: { usuario: "Ingresá tu usuario." },
    });
  });

  it("transiciona de submitting a rejected (A2)", () => {
    const next = loginFlowReducer(
      { status: "submitting" },
      { type: "REJECTED" },
    );
    expect(next).toEqual({ status: "rejected" });
  });

  it("transiciona de submitting a unreachable (A3)", () => {
    const next = loginFlowReducer(
      { status: "submitting" },
      { type: "UNREACHABLE" },
    );
    expect(next).toEqual({ status: "unreachable" });
  });

  it("transiciona de submitting a entering con la sesión", () => {
    const next = loginFlowReducer(
      { status: "submitting" },
      { type: "SUCCESS", sesion: MOCK_SESSION },
    );
    expect(next).toEqual({ status: "entering", sesion: MOCK_SESSION });
  });

  it("CLEAR_ERROR vuelve a idle desde estados de error y no afecta submitting ni entering", () => {
    const errorStates: LoginState[] = [
      { status: "invalid", campos: { usuario: "Falta" } },
      { status: "rejected" },
      { status: "unreachable" },
    ];
    for (const s of errorStates) {
      expect(loginFlowReducer(s, { type: "CLEAR_ERROR" })).toEqual({
        status: "idle",
      });
    }

    expect(
      loginFlowReducer({ status: "submitting" }, { type: "CLEAR_ERROR" }),
    ).toEqual({ status: "submitting" });
    expect(
      loginFlowReducer(
        { status: "entering", sesion: MOCK_SESSION },
        { type: "CLEAR_ERROR" },
      ),
    ).toEqual({ status: "entering", sesion: MOCK_SESSION });
  });
});
