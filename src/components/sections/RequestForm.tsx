"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "h-[52px] w-full rounded-[10px] border border-line bg-white px-4 text-[15px] leading-[1.21] text-text placeholder:text-placeholder outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-ink/10";

export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/solicitud", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "No pudimos enviar tu solicitud.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No pudimos enviar tu solicitud.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="flex w-full min-w-0 flex-1 flex-col items-start gap-[18px] rounded-3xl bg-white p-6 shadow-card sm:p-[34px]"
    >
      <h2 className="w-full text-[26px] font-normal leading-[1.21] text-text">Contanos sobre tu alquiler</h2>
      <p className="w-full text-[14px] leading-[1.5] text-muted">
        Un asesor te contacta para revisar tu caso. Sin compromiso.
      </p>

      {/* Banner alternativo WhatsApp */}
      <div className="flex w-full flex-wrap items-center gap-[10px] rounded-xl border border-wa bg-wa-soft px-[14px] py-3">
        <WhatsAppIcon size={20} className="shrink-0 text-wa" />
        <div className="flex min-w-0 flex-1 flex-col gap-[2px] basis-[200px]">
          <p className="text-[13px] font-bold leading-[1.21] text-green">¿Preferís no completar el formulario?</p>
          <p className="text-[12px] leading-[1.4] text-muted">
            Escribinos directamente por WhatsApp y te orientamos al instante.
          </p>
        </div>
        <a
          href={waLink(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-wa px-[14px] py-2 text-[13px] font-bold leading-[1.21] text-white transition-colors hover:bg-wa-dark"
        >
          Escribir
        </a>
      </div>

      <div className="flex w-full flex-col gap-[14px]">
        <Field label="Nombre y apellido" htmlFor="nombre">
          <input id="nombre" name="nombre" required autoComplete="name" placeholder="Ej. Sol Martínez" className={inputClass} />
        </Field>
        <Field label="DNI" htmlFor="dni">
          <input
            id="dni"
            name="dni"
            required
            inputMode="numeric"
            autoComplete="off"
            pattern="[0-9.\s]{7,11}"
            title="Ingresá tu DNI, solo números"
            placeholder="30.123.456"
            className={inputClass}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="sol@email.com" className={inputClass} />
        </Field>
        <Field label="Teléfono" htmlFor="telefono">
          <input id="telefono" name="telefono" type="tel" required autoComplete="tel" placeholder="11 2345 6789" className={inputClass} />
        </Field>
        <Field label="Monto de alquiler estimado" htmlFor="monto">
          <input id="monto" name="monto" inputMode="numeric" placeholder="$ 650.000" className={inputClass} />
        </Field>
        <Field label="Mensaje" htmlFor="mensaje">
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Contanos si ya elegiste una propiedad o cuándo necesitás mudarte"
            className={`${inputClass} h-[112px] resize-none py-[14px]`}
          />
        </Field>
      </div>

      <Button type="submit" className="w-full" disabled={status === "loading"} aria-busy={status === "loading"}>
        {status === "loading" ? "Enviando…" : "Enviar solicitud"}
      </Button>

      {status === "success" && (
        <p role="status" className="w-full rounded-xl border border-wa bg-wa-soft px-4 py-3 text-center text-[13px] leading-[1.4] text-green">
          ¡Recibimos tu solicitud! Un asesor te contacta en hasta 24 hs hábiles.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="w-full rounded-xl border border-[#e5484d] bg-[#fff5f5] px-4 py-3 text-center text-[13px] leading-[1.4] text-[#b3261e]">
          {error}
        </p>
      )}

      <p className="w-full text-center text-[11px] leading-[1.4] text-muted">
        Al enviar aceptás nuestra política de privacidad. Tus datos están protegidos.
      </p>

      <div className="flex w-full items-center gap-[10px]" aria-hidden>
        <span className="h-px min-w-0 flex-1 bg-line" />
        <span className="text-[12px] leading-[1.21] text-placeholder">o</span>
        <span className="h-px min-w-0 flex-1 bg-line" />
      </div>

      <Button href={waLink(WA_DEFAULT_MESSAGE)} external variant="whatsapp" withWhatsAppIcon className="w-full">
        Contactar por WhatsApp
      </Button>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={htmlFor} className="text-[13px] font-bold leading-[1.21] text-text">
        {label}
      </label>
      {children}
    </div>
  );
}
