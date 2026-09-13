import { schedule, scheduleUpdated, type Match } from "./schedule";
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

function event(m: Match, stamp: string) {
  const heim = m.isHome ? "Heimspiel" : "Auswärtsspiel";
  return [
    "BEGIN:VEVENT",
    `UID:${m.date}-${m.matchday}@scuvolleyball.de`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Europe/Berlin:${lokal(m.date, m.time)}`,
    `DTEND;TZID=Europe/Berlin:${lokal(m.date, m.time, DAUER_MINUTEN)}`,
    `SUMMARY:${escape(`${m.home} – ${m.away}`)}`,
    `LOCATION:${escape(`${m.venue}, ${m.city}`)}`,
    `DESCRIPTION:${escape(`${heim} · ${m.matchday}. Spieltag · Sparda 2. Liga Pro`)}`,
    `URL:${site.url}/teams/1-mannschaft#spielplan`,
    "END:VEVENT",
  ];
}

export function spielplanAlsIcs() {
  // Fester Zeitstempel aus dem Datenstand: ein wechselnder Wert bei jedem Abruf
  // liesse Kalender-Apps glauben, alle Termine hätten sich geändert.
  const stamp = `${scheduleUpdated.replace(/-/g, "")}T000000Z`;

  const zeilen = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SCU Emlichheim//Spielplan 1. Damen//DE",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:SCU Emlichheim – 1. Damen",
    "X-WR-CALDESC:Spielplan der 1. Damen in der Sparda 2. Liga Pro",
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
    ...schedule.flatMap((m) => event(m, stamp)),
    "END:VCALENDAR",
  ];

  return zeilen.map(fold).join("\r\n") + "\r\n";
}
