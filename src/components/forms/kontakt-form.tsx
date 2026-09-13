"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendContact, type ContactState } from "@/app/kontakt/actions";

const initial: ContactState = { status: "idle" };

function Field({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.22em] font-bold text-white/70 mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
        className="w-full h-12 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 px-4 focus:border-scu-yellow outline-none"
      />
    </div>
  );
}

export function KontaktForm({ email }: { email: string }) {
  const [state, action, pending] = React.useActionState(sendContact, initial);

  if (state.status === "ok") {
    return (
      <div className="rounded-3xl bg-scu-black text-white p-8 lg:p-10 flex flex-col gap-4">
        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
          <CheckCircle2 className="size-6" />
        </div>
        <h2 className="font-display text-3xl font-black leading-tight">Nachricht ist raus</h2>
        <p className="text-white/70 leading-relaxed">
          Danke! Wir melden uns in der Regel innerhalb von 48 Stunden.
        </p>
      </div>
    );
  }

  const alt = state.status === "error" ? state.fields : undefined;

  return (
    <form action={action} className="rounded-3xl bg-scu-black text-white p-8 lg:p-10 flex flex-col gap-5">
      <div>
        <h2 className="font-display text-3xl font-black leading-tight">Schreib uns</h2>
        <p className="text-white/70 mt-2">Wir melden uns in der Regel innerhalb von 48 Stunden.</p>
      </div>

      {state.status === "error" && (
        <p role="alert" className="flex gap-2 items-start rounded-xl bg-white/10 border border-white/20 p-3 text-sm">
          <AlertCircle className="size-4 shrink-0 mt-0.5 text-scu-yellow" />
          <span>{state.message}</span>
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" defaultValue={alt?.name} />
        <Field label="E-Mail" name="email" type="email" defaultValue={alt?.email} />
      </div>
      <Field
        label="Thema"
        name="topic"
        placeholder="Sponsoring, Probetraining, Presse …"
        defaultValue={alt?.topic}
      />
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.22em] font-bold text-white/70 mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={alt?.message}
          className="w-full rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 focus:border-scu-yellow outline-none resize-none"
        />
      </div>

      {/* Honeypot – vor Menschen versteckt, für Bots sichtbar */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-fit" disabled={pending}>
        {pending ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
      <p className="text-xs text-white/50">
        Oder direkt an{" "}
        <Link href={`mailto:${email}`} className="underline">
          {email}
        </Link>
        . Durch das Absenden erklärst du dich mit unserer{" "}
        <Link href="/datenschutz" className="underline">
          Datenschutzerklärung
        </Link>{" "}
        einverstanden.
      </p>
    </form>
  );
}
