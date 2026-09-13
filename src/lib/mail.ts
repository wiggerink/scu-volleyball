import "server-only";
import nodemailer from "nodemailer";

/**
 * Mailversand über das bestehende Vereinspostfach (SMTP).
 *
 * Bewusst SMTP statt eines Drittanbieters: die Adresse liegt schon beim Hoster,
 * es braucht keine Domain-Verifizierung und keinen zusätzlichen Vertrag.
 *
 * Nötige Environment-Variablen (Vercel → Project Settings → Environment Variables):
 *   SMTP_HOST      z. B. w01abcde.kasserver.com
 *   SMTP_PORT      587 (STARTTLS) oder 465 (SSL)
 *   SMTP_USER      Postfachname
 *   SMTP_PASSWORD  Postfachpasswort
 *   SMTP_FROM      Absenderadresse, muss zum Postfach gehören
 *   KONTAKT_TO     Empfänger (optional, sonst site.contact.email)
 */
const REQUIRED = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "SMTP_FROM"] as const;

export function isMailConfigured() {
  return REQUIRED.every((key) => Boolean(process.env[key]));
}

/** Fehlende Variablen – für Betriebs- und Fehlermeldungen, nie für den Besucher. */
export function missingMailEnv() {
  return REQUIRED.filter((key) => !process.env[key]);
}

function transport() {
  const port = Number(process.env.SMTP_PORT);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // 465 spricht direkt TLS, 587 startet mit STARTTLS
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASSWORD! },
    // Ohne Limits haengt der Versand bei nicht erreichbarem Mailserver minutenlang;
    // der Besucher saehe nur "Wird gesendet ...". Lieber nach 10 s ehrlich scheitern.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
}

export type ContactMail = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

/**
 * Harte Obergrenze um den kompletten Versand.
 *
 * Nodemailers eigene Timeouts gelten je Verbindungsversuch: gegen einen toten
 * Host haben wir gemessen, dass der Aufruf trotz connectionTimeout 10 s erst
 * nach rund 44 s aufgibt (mehrere aufgeloeste Adressen nacheinander). So lange
 * darf niemand vor "Wird gesendet ..." sitzen.
 */
function withDeadline<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`Zeitlimit von ${ms} ms ueberschritten`)), ms).unref?.(),
    ),
  ]);
}

export async function sendContactMail(data: ContactMail, to: string) {
  if (!isMailConfigured()) {
    throw new Error(`SMTP nicht konfiguriert, es fehlen: ${missingMailEnv().join(", ")}`);
  }

  const text = [
    `Name:    ${data.name}`,
    `E-Mail:  ${data.email}`,
    `Thema:   ${data.topic}`,
    "",
    data.message,
  ].join("\n");

  await withDeadline(
    transport().sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.KONTAKT_TO || to,
      // Antworten gehen an den Absender des Formulars, nicht ans eigene Postfach
      replyTo: `${data.name} <${data.email}>`,
      subject: `Kontaktformular: ${data.topic}`,
      text,
    }),
    12_000,
  );
}
