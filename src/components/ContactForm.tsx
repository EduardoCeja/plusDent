"use client";

import { useState } from "react";

type FormState = { ok: boolean; msg: string } | null;

type ContactApiResponse = {
  message?: string;
};

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    ("message" in value ? typeof (value as { message?: unknown }).message === "string" : true)
  );
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setState(null);

    try {
      const form = new FormData(e.currentTarget);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: form,
      });

      let data: ContactApiResponse | null = null;

      // Intentar leer JSON (si la API no regresa JSON, no pasa nada)
      try {
        const parsed: unknown = await res.json();
        if (isContactApiResponse(parsed)) data = parsed;
      } catch {
        // no JSON
      }

      const msg =
        data?.message ??
        (res.ok
          ? "¡Mensaje enviado! Te contactaremos pronto."
          : "Ocurrió un error al enviar el mensaje.");

      setState({ ok: res.ok, msg });

      if (res.ok) e.currentTarget.reset();
    } catch {
      setState({
        ok: false,
        msg: "No se pudo enviar. Revisa tu conexión e inténtalo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  }

  const fieldBase =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 " +
    "outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 w-full max-w-xl">
      <input
        name="name"
        placeholder="Nombre"
        required
        autoComplete="name"
        className={fieldBase}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        autoComplete="email"
        className={fieldBase}
      />

      <input
        name="phone"
        placeholder="Teléfono"
        autoComplete="tel"
        inputMode="tel"
        className={fieldBase}
      />

      <textarea
        name="message"
        minLength={10}
        placeholder="Cuéntanos tu caso"
        required
        className={`${fieldBase} min-h-32 resize-y`}
      />

      <button
        disabled={loading}
        className="btn btn-brand w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando…" : "Enviar mensaje"}
      </button>

      {state && (
        <div
          className={[
            "rounded-xl border p-3 text-sm",
            state.ok
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800",
          ].join(" ")}
          role="status"
          aria-live="polite"
        >
          {state.msg}
        </div>
      )}
    </form>
  );
}