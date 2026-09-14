import { schedule, scheduleUpdated } from "./schedule";
import { schedule2, schedule2Liga, schedule2Updated } from "./schedule-2";
import { site } from "./site";

/**
 * Spielplan als iCalendar-Feed.
 *
 * Fans abonnieren die Adresse einmal, danach landet jedes Spiel automatisch
 * im Kalender – auch Änderungen, sobald der Spielplan hier aktualisiert wird.
 */

/** Ein Volleyballspiel dauert mit Warmmachen und Siegerehrung gut zwei Stunden. */
const DAUER_MINUTEN = 120;

/** Sonderzeichen, die in iCalendar-Textwerten maskiert werden müssen. */
function escape(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * Zeilen über 75 Oktett müssen umgebrochen werden (RFC 5545, "line folding"),
 * Folgezeilen beginnen mit einem Leerzeichen. Wir rechnen in Bytes, weil
 * Umlaute in UTF-8 zwei Oktett belegen.
 */
function fold(line: string) {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 75) return line;

  const teile: string[] = [];
  let rest = line;
  let limit = 75;
  while (Buffer.from(rest, "utf8").length > limit) {
    let schnitt = limit;
    // Nie mitten in ein Mehrbyte-Zeichen schneiden
    while (Buffer.from(rest.slice(0, schnitt), "utf8").length > limit) schnitt--;
    teile.push(rest.slice(0, schnitt));
    rest = rest.slice(schnitt);
    limit = 74; // Folgezeilen tragen ein führendes Leerzeichen
  }
  teile.push(rest);
  return teile.join("\r\n ");
}

/** "2026-09-20" + "16:00" -> "20260920T160000" (lokale Hallenzeit) */
function lokal(date: string, time: string, plusMinuten = 0) {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  // In UTC rechnen und wieder als lokale Wandzeit ausgeben: so verschiebt die
  // Addition der Spieldauer den Tag korrekt, ohne dass eine Zeitzone hineinspielt.
  const t = new Date(Date.UTC(y, m - 1, d, hh, mm + plusMinuten));
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    `${t.getUTCFullYear()}${p(t.getUTCMonth() + 1)}${p(t.getUTCDate())}` +
    `T${p(t.getUTCHours())}${p(t.getUTCMinutes())}00`
  );
}

/** Gemeinsame Form beider Spielpläne, soweit der Kalender sie braucht. */
type IcsSpiel = {
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  /** Ort der Halle, sofern die Quelle ihn liefert. */
  city?: string;
  /** Spieltagsnummer, sofern die Quelle sie liefert. */
  matchday?: number;
  isHome: boolean;
};

type Kalender = {
  spiele: IcsSpiel[];
  /** Anzeigename in der Kalender-App */
  name: string;
  liga: string;
  /** Seite, auf die ein Termin verlinkt */
  seite: string;
  /** Präfix der Termin-Kennung, damit sich die beiden Kalender nicht überschreiben */
  kennung: string;
  /** Datenstand als ISO-Tag */
  stand: string;
};

/** Kennungen sollen stabil und frei von Leerzeichen und Umlauten sein. */
function kuerzel(text: string) {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function event(m: IcsSpiel, k: Kalender, stamp: string) {
  const heim = m.isHome ? "Heimspiel" : "Auswärtsspiel";
  const beschreibung = [heim, m.matchday && `${m.matchday}. Spieltag`, k.liga]
    .filter(Boolean)
    .join(" · ");
  return [
    "BEGIN:VEVENT",
    `UID:${k.kennung}-${m.date}-${m.matchday ?? kuerzel(m.home)}@scuvolleyball.de`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Europe/Berlin:${lokal(m.date, m.time)}`,
    `DTEND;TZID=Europe/Berlin:${lokal(m.date, m.time, DAUER_MINUTEN)}`,
    `SUMMARY:${escape(`${m.home} – ${m.away}`)}`,
    `LOCATION:${escape(m.city ? `${m.venue}, ${m.city}` : m.venue)}`,
    `DESCRIPTION:${escape(beschreibung)}`,
    `URL:${site.url}${k.seite}`,
    "END:VEVENT",
  ];
}

function baueIcs(k: Kalender) {
  // Fester Zeitstempel aus dem Datenstand: ein wechselnder Wert bei jedem Abruf
  // liesse Kalender-Apps glauben, alle Termine hätten sich geändert.
  const stamp = `${k.stand.replace(/-/g, "")}T000000Z`;

  const zeilen = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//SCU Emlichheim//${k.name}//DE`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${k.name}`,
    `X-WR-CALDESC:${k.liga}, Saison 2026/27`,
    "X-WR-TIMEZONE:Europe/Berlin",
    // Ohne VTIMEZONE interpretieren manche Kalender die Zeiten als UTC und
    // zeigen die Spiele im Winter eine, im Sommer zwei Stunden zu früh.
    "BEGIN:VTIMEZONE",
    "TZID:Europe/Berlin",
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0200",
    "TZNAME:CEST",
    "DTSTART:19700329T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0200",
    "TZOFFSETTO:+0100",
    "TZNAME:CET",
    "DTSTART:19701025T030000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
    ...k.spiele.flatMap((m) => event(m, k, stamp)),
    "END:VCALENDAR",
  ];

  return zeilen.map(fold).join("\r\n") + "\r\n";
}

/** Spielplan der 1. Damen, Sparda 2. Liga Pro. */
export function spielplanAlsIcs() {
  return baueIcs({
    spiele: schedule,
    name: "SCU Emlichheim – 1. Damen",
    liga: "Sparda 2. Liga Pro",
    seite: "/teams/1-mannschaft#spielplan",
    kennung: "1damen",
    stand: scheduleUpdated,
  });
}

/** Spielplan der 2. Damen, 3. Liga West. */
export function spielplan2AlsIcs() {
  return baueIcs({
    spiele: schedule2,
    name: "SCU Emlichheim – 2. Damen",
    liga: schedule2Liga,
    seite: "/teams/2-mannschaft#spielplan",
    kennung: "2damen",
    stand: schedule2Updated,
  });
}
