import { NextResponse } from "next/server";
import { isMailConfigured, mailConfigSummary, sendSolicitud } from "@/lib/mail";

type Payload = {
  nombre?: string;
  dni?: string;
  email?: string;
  telefono?: string;
  monto?: string;
  mensaje?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { nombre: 120, email: 160, telefono: 40, monto: 40, mensaje: 2000 };

export async function POST(req: Request) {
  const reqId = crypto.randomUUID().slice(0, 8);
  const tag = `[solicitud ${reqId}]`;
  const started = Date.now();

  const bad = (error: string, status = 400) => {
    console.warn(`${tag} respuesta ${status}: ${error} (${Date.now() - started} ms)`);
    return NextResponse.json({ ok: false, error, reqId }, { status });
  };

  console.log(`${tag} POST recibido`, {
    ua: req.headers.get("user-agent")?.slice(0, 80),
    origin: req.headers.get("origin"),
  });

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch (err) {
    console.warn(`${tag} body no es JSON válido`, err);
    return bad("Solicitud inválida.");
  }

  const nombre = (body.nombre ?? "").trim().slice(0, MAX.nombre);
  const email = (body.email ?? "").trim().slice(0, MAX.email);
  const telefono = (body.telefono ?? "").trim().slice(0, MAX.telefono);
  const dni = (body.dni ?? "").replace(/\D/g, "");
  const monto = (body.monto ?? "").trim().slice(0, MAX.monto);
  const mensaje = (body.mensaje ?? "").trim().slice(0, MAX.mensaje);

  console.log(`${tag} campos recibidos`, {
    nombre: nombre.length,
    dni: dni.length,
    email: email.length,
    telefono: telefono.length,
    monto: monto.length,
    mensaje: mensaje.length,
  });

  if (nombre.length < 2) return bad("Ingresá tu nombre y apellido.");
  if (dni.length < 7 || dni.length > 8) return bad("Ingresá un DNI válido (7 u 8 números).");
  if (!EMAIL_RE.test(email)) return bad("Ingresá un email válido.");
  if (telefono.replace(/\D/g, "").length < 8) return bad("Ingresá un teléfono válido.");

  const data = { nombre, dni, email, telefono, monto, mensaje };

  console.log(`${tag} config de mail`, mailConfigSummary());

  if (!isMailConfigured()) {
    console.error(`${tag} GMAIL_USER / GMAIL_APP_PASSWORD no configurados. Datos de la solicitud:`, data);
    return bad("El envío de solicitudes no está disponible por el momento. Escribinos por WhatsApp.", 503);
  }

  try {
    await sendSolicitud(data, reqId);
    console.log(`${tag} OK en ${Date.now() - started} ms`);
    return NextResponse.json({ ok: true, reqId });
  } catch (err) {
    const e = err as Error & { code?: string; command?: string; responseCode?: number; response?: string };
    console.error(`${tag} error enviando mail`, {
      name: e?.name,
      message: e?.message,
      code: e?.code,
      command: e?.command,
      responseCode: e?.responseCode,
      response: e?.response,
    });
    console.error(`${tag} datos de la solicitud no enviada:`, data);
    return bad("No pudimos enviar tu solicitud. Probá de nuevo o escribinos por WhatsApp.", 502);
  }
}
