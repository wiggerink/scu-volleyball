"use server";

import { sendContactMail } from "@/lib/mail";
import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string; fields?: Record<string, string> };

const MAX = { name: 120, email: 200, topic: 160, message: 5000 };

function str(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  const fields = {
    name: str(data, "name"),
    email: str(data, "email"),
    topic: str(data, "topic"),
    message: str(data, "message"),
  };

  // Honeypot: echte Besucher sehen das Feld nicht, Bots fuellen es aus.
  // Wir melden Erfolg, damit der Bot nicht nachjustiert.
  if (str(data, "website")) return { status: "ok" };

  const leer = Object.entries(fields).find(([, v]) => !v);
  if (leer) {
    return { status: "error", message: "Bitte fülle alle Felder aus.", fields };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
    return { status: "error", message: "Diese E-Mail-Adresse sieht nicht richtig aus.", fields };
  }
  for (const [key, limit] of Object.entries(MAX)) {
    if (fields[key as keyof typeof fields].length > limit) {
      return { status: "error", message: "Die Nachricht ist zu lang.", fields };
    }
  }

  try {
    await sendContactMail(fields, site.contact.email);
    return { status: "ok" };
  } catch (err) {
    // Der genaue Grund (SMTP-Zugangsdaten, Netzwerk) gehoert ins Serverlog, nicht in den Browser
    console.error("Kontaktformular: Versand fehlgeschlagen", err);
    return {
      status: "error",
      message: `Die Nachricht konnte gerade nicht gesendet werden. Schreib uns bitte direkt an ${site.contact.email}.`,
      fields,
    };
  }
}
