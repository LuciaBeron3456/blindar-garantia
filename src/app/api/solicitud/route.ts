import { NextResponse } from "next/server";

type Payload = {
  nombre?: string;
  dni?: string;
  email?: string;
  telefono?: string;
  monto?: string;
  mensaje?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const nombre = body.nombre?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const telefono = body.telefono?.trim() ?? "";
  const dni = (body.dni ?? "").replace(/\D/g, "");

  if (nombre.length < 2) {
    return NextResponse.json({ ok: false, error: "Ingresá tu nombre y apellido." }, { status: 400 });
  }
  if (dni.length < 7 || dni.length > 8) {
    return NextResponse.json({ ok: false, error: "Ingresá un DNI válido (7 u 8 números)." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Ingresá un email válido." }, { status: 400 });
  }
  if (telefono.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ ok: false, error: "Ingresá un teléfono válido." }, { status: 400 });
  }

  // TODO: conectar con CRM / email / base de datos.
  console.log("[solicitud]", {
    nombre,
    dni,
    email,
    telefono,
    monto: body.monto?.trim() ?? "",
    mensaje: body.mensaje?.trim() ?? "",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
