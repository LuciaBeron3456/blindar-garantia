import nodemailer from "nodemailer";
import { site } from "./site";

export type Solicitud = {
  nombre: string;
  dni: string;
  email: string;
  telefono: string;
  monto: string;
  mensaje: string;
};

/**
 * Envío por Gmail con "contraseña de aplicación".
 * Variables requeridas: GMAIL_USER y GMAIL_APP_PASSWORD. Opcional: MAIL_TO.
 */
export function isMailConfigured() {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

/** Estado de la configuración, sin exponer secretos. Para logs. */
export function mailConfigSummary() {
  const user = process.env.GMAIL_USER ?? "";
  const pass = (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s/g, "");
  return {
    gmailUser: user ? maskEmail(user) : "(vacío)",
    appPasswordLength: pass.length, // Gmail genera 16 caracteres
    appPasswordLooksValid: pass.length === 16,
    mailTo: process.env.MAIL_TO ? maskEmail(process.env.MAIL_TO) : "(= GMAIL_USER)",
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV ?? "(no vercel)",
  };
}

function maskEmail(e: string) {
  const [u, d] = e.split("@");
  if (!d) return "***";
  return `${u.slice(0, 2)}***@${d}`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendSolicitud(data: Solicitud, reqId = "-") {
  const tag = `[solicitud ${reqId}]`;
  const user = process.env.GMAIL_USER!;
  const pass = process.env.GMAIL_APP_PASSWORD!.replace(/\s/g, "");
  const to = process.env.MAIL_TO || user;

  console.log(`${tag} mail: creando transporte smtp.gmail.com:465`, {
    from: maskEmail(user),
    to: maskEmail(to),
    replyTo: maskEmail(data.email),
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const rows: Array<[string, string]> = [
    ["Nombre y apellido", data.nombre],
    ["DNI", data.dni],
    ["Email", data.email],
    ["Teléfono", data.telefono],
    ["Monto de alquiler estimado", data.monto || "—"],
    ["Mensaje", data.mensaje || "—"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#122522;max-width:560px">
      <p style="font-size:11px;font-weight:800;color:#147a5b;letter-spacing:.04em;margin:0 0 6px">NUEVA SOLICITUD · WEB</p>
      <h1 style="font-size:22px;font-weight:400;margin:0 0 16px">Contanos sobre tu alquiler</h1>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 10px;border:1px solid #d7e0dd;background:#f5f7f6;font-size:13px;font-weight:700;width:40%">${escapeHtml(k)}</td>
            <td style="padding:8px 10px;border:1px solid #d7e0dd;font-size:14px;white-space:pre-wrap">${escapeHtml(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="font-size:12px;color:#5c6b68;margin-top:16px">Enviado desde el formulario de ${escapeHtml(site.url)}. Podés responder este mail para contactar al solicitante.</p>
    </div>`;

  const started = Date.now();
  console.log(`${tag} mail: enviando…`);
  const info = await transporter.sendMail({
    from: `"Blindar Web" <${user}>`,
    to,
    replyTo: `"${data.nombre.replace(/"/g, "")}" <${data.email}>`,
    subject: `Nueva solicitud de garantía · ${data.nombre}`,
    text,
    html,
  });
  console.log(`${tag} mail: enviado en ${Date.now() - started} ms`, {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });
  return info;
}
