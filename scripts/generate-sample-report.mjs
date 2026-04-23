#!/usr/bin/env node
/**
 * Generates a sample sponsor portrait report PDF.
 * Used as a downloadable teaser on /sponsoren/angebot.
 *
 * Usage: node scripts/generate-sample-report.mjs
 * Output: public/downloads/sponsoren-beispielreport.pdf
 */
import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const OUTPUT = path.join(ROOT, "public", "downloads", "sponsoren-beispielreport.pdf");
const LOGO_WNS = path.join(ROOT, "public", "partners", "web-n-search.png");
const LOGO_SCU = path.join(ROOT, "public", "logos", "scu-logo.png");

// SCU design tokens
const COLOR = {
  black: "#111111",
  yellow: "#FFF001",
  yellowDark: "#E5D800",
  gold: "#C9A14A",
  gray800: "#2A2A2A",
  gray500: "#6B6B6B",
  gray300: "#C9C9C9",
  gray200: "#E5E5E5",
  gray100: "#F3F3F3",
  white: "#FFFFFF",
  green: "#1F9D55",
  red: "#C03A3A",
};

// Page layout
const MARGIN = 48;
const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const CONTENT_W = PAGE_WIDTH - MARGIN * 2;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  bufferPages: true,
  autoFirstPage: true,
  info: {
    Title: "Sponsoren-Portrait – Beispiel-Report Q1 2026",
    Author: "Web & Search",
    Subject: "Performance-Report für SCU-Sponsoren-Portraitseiten",
    Keywords: "SCU Volleyball, Sponsoring, SEO, Backlink, Report",
    CreationDate: new Date("2026-04-01T08:00:00Z"),
  },
});

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
doc.pipe(fs.createWriteStream(OUTPUT));

// --- Text helpers — always reset x to MARGIN for flow text --------------------
function resetX() {
  doc.x = MARGIN;
}
function h1(text) {
  resetX();
  doc.fillColor(COLOR.black).font("Helvetica-Bold").fontSize(22).text(text, { width: CONTENT_W });
  doc.moveDown(0.3);
}
function h2(text) {
  resetX();
  doc.fillColor(COLOR.black).font("Helvetica-Bold").fontSize(13).text(text, { width: CONTENT_W });
  doc.moveDown(0.25);
}
function eyebrow(text) {
  resetX();
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text(text.toUpperCase(), { characterSpacing: 2, width: CONTENT_W });
  doc.moveDown(0.15);
}
function body(text, opts = {}) {
  resetX();
  doc
    .fillColor(opts.color ?? COLOR.gray800)
    .font("Helvetica")
    .fontSize(10)
    .text(text, { width: CONTENT_W, lineGap: 3, align: "justify", ...opts });
}
function small(text, opts = {}) {
  resetX();
  doc
    .fillColor(opts.color ?? COLOR.gray500)
    .font("Helvetica")
    .fontSize(8)
    .text(text, { width: CONTENT_W, ...opts });
}

// KPI card (absolute-positioned, does NOT mutate doc.x/doc.y text flow)
function kpiCard(x, y, w, h, { label, value, sub, accent = COLOR.yellow, delta }) {
  doc.save();
  doc.roundedRect(x, y, w, h, 10).fillAndStroke(COLOR.white, COLOR.gray200);
  doc.roundedRect(x, y, w, 4, 2).fill(accent);

  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica-Bold")
    .fontSize(7)
    .text(String(label).toUpperCase(), x + 14, y + 14, {
      width: w - 28,
      characterSpacing: 1.3,
      lineBreak: false,
      ellipsis: true,
    });
  doc
    .fillColor(COLOR.black)
    .font("Helvetica-Bold")
    .fontSize(20)
    .text(String(value), x + 14, y + 30, { width: w - 28, lineBreak: false });
  if (sub) {
    doc
      .fillColor(COLOR.gray500)
      .font("Helvetica")
      .fontSize(7.5)
      .text(sub, x + 14, y + 58, { width: w - 28, lineBreak: false, ellipsis: true });
  }
  if (delta) {
    const isPos = String(delta).startsWith("+");
    doc
      .fillColor(isPos ? COLOR.green : COLOR.red)
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(delta, x + 14, y + h - 18, { width: w - 28, lineBreak: false, ellipsis: true });
  }
  doc.restore();
  resetX();
}

// Horizontal bar chart — returns the bottom Y
function barChart(y, items, { barHeight = 16, gap = 8, max } = {}) {
  const x = MARGIN;
  const w = CONTENT_W;
  const m = max ?? Math.max(...items.map((i) => i.value));
  const labelW = 150;
  const valueW = 60;
  const trackX = x + labelW;
  const trackW = w - labelW - valueW;

  items.forEach((item, i) => {
    const yy = y + i * (barHeight + gap);
    doc
      .fillColor(COLOR.gray800)
      .font("Helvetica")
      .fontSize(9.5)
      .text(item.label, x, yy + 3, { width: labelW - 10, lineBreak: false });

    doc.save();
    doc.roundedRect(trackX, yy, trackW, barHeight, 4).fill(COLOR.gray100);
    const barW = Math.max(2, (item.value / m) * trackW);
    doc.roundedRect(trackX, yy, barW, barHeight, 4).fill(item.color ?? COLOR.yellow);
    doc.restore();

    doc
      .fillColor(COLOR.black)
      .font("Helvetica-Bold")
      .fontSize(9.5)
      .text(item.display ?? item.value.toLocaleString("de-DE"), trackX + trackW + 8, yy + 3, {
        width: valueW - 8,
        align: "left",
        lineBreak: false,
      });
  });
  resetX();
  return y + items.length * (barHeight + gap);
}

// Trend line (filled)
function trendLine(x, y, w, h, series, { color = COLOR.yellowDark } = {}) {
  const max = Math.max(...series);
  const min = Math.min(...series);
  const range = Math.max(1, max - min);
  const stepX = w / (series.length - 1);
  const points = series.map((v, i) => ({
    x: x + i * stepX,
    y: y + h - ((v - min) / range) * h * 0.85 - h * 0.08,
  }));

  doc.save();
  doc.moveTo(points[0].x, y + h);
  points.forEach((p) => doc.lineTo(p.x, p.y));
  doc.lineTo(points[points.length - 1].x, y + h).closePath();
  doc.fillOpacity(0.22).fill(COLOR.yellow);
  doc.restore();

  doc.save();
  doc.lineWidth(1.8).strokeColor(color);
  doc.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((p) => doc.lineTo(p.x, p.y));
  doc.stroke();
  points.forEach((p) => {
    doc.circle(p.x, p.y, 2.6).fill(COLOR.black);
  });
  doc.restore();
  resetX();
}

// Table
function table(y, { columns, rows, headerFill = COLOR.black }) {
  const x = MARGIN;
  const w = CONTENT_W;
  const rowH = 22;

  doc.save();
  doc.rect(x, y, w, rowH).fill(headerFill);
  let cx = x;
  columns.forEach((c) => {
    doc
      .fillColor(COLOR.white)
      .font("Helvetica-Bold")
      .fontSize(9)
      .text(c.title, cx + 8, y + 7, {
        width: c.width - 16,
        align: c.align ?? "left",
        lineBreak: false,
      });
    cx += c.width;
  });
  doc.restore();

  rows.forEach((row, i) => {
    const ry = y + rowH + i * rowH;
    const zebra = i % 2 === 0 ? COLOR.gray100 : COLOR.white;
    doc.save().rect(x, ry, w, rowH).fill(zebra).restore();
    let rx = x;
    columns.forEach((c) => {
      const val = row[c.key] ?? "";
      const isNum = c.align === "right";
      doc
        .fillColor(COLOR.gray800)
        .font(isNum ? "Helvetica-Bold" : "Helvetica")
        .fontSize(9)
        .text(String(val), rx + 8, ry + 7, {
          width: c.width - 16,
          align: c.align ?? "left",
          lineBreak: false,
        });
      rx += c.width;
    });
  });

  doc.save();
  doc.lineWidth(0.5).strokeColor(COLOR.gray200);
  doc.rect(x, y, w, rowH + rows.length * rowH).stroke();
  doc.restore();
  resetX();
  return y + rowH + rows.length * rowH;
}

// =============================================================================
// PAGE 1 – COVER
// =============================================================================
function coverPage() {
  // Top black band
  doc.save().rect(0, 0, PAGE_WIDTH, 180).fill(COLOR.black).restore();
  // Yellow accent
  doc.save().rect(0, 180, PAGE_WIDTH, 6).fill(COLOR.yellow).restore();
  // Yellow blob
  doc.save();
  doc.circle(PAGE_WIDTH - 60, 40, 120).fillOpacity(0.18).fill(COLOR.yellow);
  doc.restore();

  if (fs.existsSync(LOGO_SCU)) {
    try {
      doc.image(LOGO_SCU, MARGIN, 36, { height: 46 });
    } catch {}
  }

  doc
    .fillColor(COLOR.yellow)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("SCUVOLLEYBALL.DE", MARGIN, 108, { characterSpacing: 2.5 });
  doc
    .fillColor(COLOR.white)
    .font("Helvetica-Bold")
    .fontSize(28)
    .text("Sponsoren-Portrait", MARGIN, 124);
  doc
    .fillColor(COLOR.white)
    .font("Helvetica")
    .fontSize(13)
    .text("Performance-Report - Q1 2026", MARGIN, 156);

  // Meta block
  const metaY = 220;
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("BERICHT FUR", MARGIN, metaY, { characterSpacing: 1.8 });
  doc
    .fillColor(COLOR.black)
    .font("Helvetica-Bold")
    .fontSize(18)
    .text("Muster GmbH & Co. KG", MARGIN, metaY + 14);
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica")
    .fontSize(10)
    .text("Beispielweg 12 - 49824 Emlichheim", MARGIN, metaY + 40);

  const rightX = PAGE_WIDTH - MARGIN - 220;
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("BERICHTSZEITRAUM", rightX, metaY, {
      characterSpacing: 1.8,
      width: 220,
      align: "right",
      lineBreak: false,
    });
  doc
    .fillColor(COLOR.black)
    .font("Helvetica-Bold")
    .fontSize(13)
    .text("01.01.2026 - 31.03.2026", rightX, metaY + 14, { width: 220, align: "right" });
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica")
    .fontSize(9)
    .text("Erstellt am 01.04.2026", rightX, metaY + 40, { width: 220, align: "right" });

  // KPI strip
  const kpiY = 310;
  const gap = 10;
  const cw = (CONTENT_W - gap * 3) / 4;
  kpiCard(MARGIN + 0, kpiY, cw, 98, {
    label: "Seitenaufrufe",
    value: "3.412",
    sub: "Portraitseite Q1 2026",
    delta: "+18 % vs. Q4",
    accent: COLOR.yellow,
  });
  kpiCard(MARGIN + (cw + gap), kpiY, cw, 98, {
    label: "Ø Verweildauer",
    value: "2:47",
    sub: "min:sek pro Sitzung",
    delta: "+0:32",
    accent: COLOR.gold,
  });
  kpiCard(MARGIN + 2 * (cw + gap), kpiY, cw, 98, {
    label: "Klicks auf Website",
    value: "284",
    sub: "via Dofollow-Backlink",
    delta: "+41 %",
    accent: COLOR.yellow,
  });
  kpiCard(MARGIN + 3 * (cw + gap), kpiY, cw, 98, {
    label: "Ranking-Keywords",
    value: "27",
    sub: "Top-100 bei Google",
    delta: "+9 neu",
    accent: COLOR.gold,
  });

  // Teaser
  doc.y = 440;
  resetX();
  doc
    .fillColor(COLOR.gray800)
    .font("Helvetica")
    .fontSize(11)
    .text(
      "Dieser Beispiel-Report zeigt, wie ein typischer Quartalsbericht für eine Portraitseite auf scuvolleyball.de aussieht. Alle Zahlen sind anonymisiert und orientieren sich an realen Messwerten eines Gold-Partners nach sechs Monaten Laufzeit. Vergleichswerte stammen aus Google Search Console, Matomo Analytics und Ahrefs.",
      MARGIN,
      440,
      { width: CONTENT_W, lineGap: 3, align: "justify" },
    );

  // Bottom "by" block
  const byY = PAGE_HEIGHT - 170;
  doc.save().rect(MARGIN, byY, CONTENT_W, 100).fill(COLOR.gray100).restore();
  doc.save().rect(MARGIN, byY, 5, 100).fill(COLOR.yellow).restore();

  if (fs.existsSync(LOGO_WNS)) {
    try {
      doc.image(LOGO_WNS, MARGIN + 22, byY + 24, { height: 52 });
    } catch {}
  }
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("ERSTELLT & BEREITGESTELLT DURCH", MARGIN + 190, byY + 24, {
      characterSpacing: 1.5,
    });
  doc
    .fillColor(COLOR.black)
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Web & Search", MARGIN + 190, byY + 38);
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica")
    .fontSize(9.5)
    .text("info@web-n-search.de  -  web-n-search.de", MARGIN + 190, byY + 60);
  doc
    .fillColor(COLOR.gray500)
    .font("Helvetica")
    .fontSize(8)
    .text(
      "Offizieller Technik- & Content-Partner von scuvolleyball.de",
      MARGIN + 190,
      byY + 76,
    );
}

// =============================================================================
// PAGE 2 - TRAFFIC
// =============================================================================
function trafficPage() {
  doc.addPage();
  eyebrow("Kapitel 1 - Reichweite");
  h1("Traffic & Sichtbarkeit");
  body(
    "Die Portraitseite hat im ersten Quartal 2026 3.412 eindeutige Seitenaufrufe erreicht - ein Plus von 18 % gegenüber dem Vorquartal. Haupttreiber sind organische Google-Suchen sowie interne Verlinkungen von der SCU-Sponsorenübersicht und aus dem Hallenheft-PDF.",
  );
  doc.moveDown(0.8);

  h2("Seitenaufrufe - letzte 6 Monate");
  const trendY = doc.y + 4;
  const trendH = 115;
  doc.save().roundedRect(MARGIN, trendY, CONTENT_W, trendH, 10).fill(COLOR.gray100).restore();
  trendLine(MARGIN + 20, trendY + 14, CONTENT_W - 40, trendH - 40, [
    640, 720, 880, 1020, 1140, 1252,
  ]);
  const months = ["Okt 25", "Nov 25", "Dez 25", "Jan 26", "Feb 26", "Mar 26"];
  const stepX = (CONTENT_W - 40) / (months.length - 1);
  months.forEach((m, i) => {
    doc
      .fillColor(COLOR.gray500)
      .font("Helvetica")
      .fontSize(8)
      .text(m, MARGIN + 20 + i * stepX - 22, trendY + trendH - 18, {
        width: 44,
        align: "center",
        lineBreak: false,
      });
  });
  doc.y = trendY + trendH + 20;
  resetX();

  h2("Besucherquellen");
  const sourceY = doc.y + 4;
  const afterBars = barChart(sourceY, [
    { label: "Organische Suche", value: 1842, display: "1.842", color: COLOR.yellow },
    { label: "Direkteinstiege", value: 612, display: "612", color: COLOR.yellowDark },
    { label: "SCU-Sponsorenseite", value: 487, display: "487", color: COLOR.gold },
    { label: "Social Media", value: 298, display: "298", color: COLOR.gold },
    { label: "E-Mail-Signatur", value: 121, display: "121", color: COLOR.gray300 },
    { label: "Sonstige Referrer", value: 52, display: "52", color: COLOR.gray300 },
  ]);
  doc.y = afterBars + 20;
  resetX();

  h2("Nutzerverhalten");
  const cardY = doc.y + 4;
  const gap = 10;
  const cw = (CONTENT_W - gap * 2) / 3;
  kpiCard(MARGIN, cardY, cw, 84, {
    label: "Absprungrate",
    value: "34 %",
    sub: "Branchenschnitt: 55 %",
    delta: "+0 (Ziel erreicht)",
    accent: COLOR.yellow,
  });
  kpiCard(MARGIN + cw + gap, cardY, cw, 84, {
    label: "Seiten / Sitzung",
    value: "2,3",
    sub: "Mittelwert SCU-Seiten: 1,8",
    delta: "+0,4",
    accent: COLOR.gold,
  });
  kpiCard(MARGIN + 2 * (cw + gap), cardY, cw, 84, {
    label: "Mobile-Anteil",
    value: "68 %",
    sub: "Desktop 28 %  Tablet 4 %",
    delta: "+3 pp",
    accent: COLOR.yellow,
  });
  doc.y = cardY + 84 + 10;
  resetX();
}

// =============================================================================
// PAGE 3 - SEO
// =============================================================================
function seoPage() {
  doc.addPage();
  eyebrow("Kapitel 2 - SEO-Wirkung");
  h1("Rankings & Backlink-Performance");
  body(
    "Die Portraitseite rankt nach drei Monaten bereits für 27 Keywords auf den ersten 100 Positionen bei Google. Der dofollow-Backlink auf Ihre Hauptdomain hat den gesamten Auftritt gestärkt - messbar an einem um 4 Punkte gestiegenen Ahrefs Domain-Rating Ihres eigenen Web-Auftritts.",
  );
  doc.moveDown(0.8);

  h2("Top-8-Keywords - Position & Impressionen");
  const tableY = doc.y + 4;
  const endY = table(tableY, {
    columns: [
      { key: "kw", title: "Keyword", width: 220 },
      { key: "pos", title: "Position", width: 60, align: "right" },
      { key: "delta", title: "Chg. 90T", width: 65, align: "right" },
      { key: "imp", title: "Impressionen", width: 90, align: "right" },
      { key: "ctr", title: "CTR", width: 64, align: "right" },
    ],
    rows: [
      { kw: "Muster GmbH Emlichheim",          pos: "1",  delta: "+4",   imp: "1.420", ctr: "38 %" },
      { kw: "Muster Maschinenbau Grafschaft",  pos: "3",  delta: "+8",   imp: "682",   ctr: "17 %" },
      { kw: "Karriere Muster GmbH",            pos: "4",  delta: "neu",  imp: "512",   ctr: "12 %" },
      { kw: "Muster Ausbildung 2026",          pos: "6",  delta: "+11",  imp: "398",   ctr: "9,4 %" },
      { kw: "Muster Kontakt Emlichheim",       pos: "8",  delta: "+3",   imp: "241",   ctr: "6,8 %" },
      { kw: "Sponsor SCU Volleyball",          pos: "11", delta: "+7",   imp: "203",   ctr: "4,1 %" },
      { kw: "Muster GmbH Referenzen",          pos: "14", delta: "neu",  imp: "176",   ctr: "3,2 %" },
      { kw: "Mittelstand Grafschaft Bentheim", pos: "22", delta: "+18",  imp: "144",   ctr: "1,9 %" },
    ],
  });
  doc.y = endY + 12;
  resetX();
  small(
    'Quelle: Google Search Console - Berichtszeitraum 01.01.-31.03.2026. "neu" = Keyword war im Vorquartal nicht in den Top 100.',
  );
  doc.moveDown(0.8);

  h2("Backlink-Wirkung auf Ihre Hauptdomain");
  const cardY = doc.y + 4;
  const gap = 10;
  const cw = (CONTENT_W - gap * 2) / 3;
  kpiCard(MARGIN, cardY, cw, 88, {
    label: "Domain-Rating (Ahrefs)",
    value: "34 -> 38",
    sub: "Messung 01.01. vs. 31.03.",
    delta: "+4 Punkte",
    accent: COLOR.yellow,
  });
  kpiCard(MARGIN + cw + gap, cardY, cw, 88, {
    label: "Ref. Domains",
    value: "72 -> 81",
    sub: "qualifizierte Verweisdomains",
    delta: "+12,5 %",
    accent: COLOR.gold,
  });
  kpiCard(MARGIN + 2 * (cw + gap), cardY, cw, 88, {
    label: "URL-Rating Portrait",
    value: "18",
    sub: "scuvolleyball.de/sponsoren/...",
    accent: COLOR.yellow,
  });
  doc.y = cardY + 88 + 14;
  resetX();

  body(
    "Hinweis: Der dofollow-Backlink von scuvolleyball.de (DR 41) zählt zu den vier stärksten Verweislinks Ihrer Domain im Berichtszeitraum. Die Verbindung 'regionaler Bundesliga-Verein zu Mittelstand vor Ort' ist thematisch passend und wird von Google entsprechend gewichtet.",
  );
}

// =============================================================================
// PAGE 4 - CONVERSION
// =============================================================================
function conversionPage() {
  doc.addPage();
  eyebrow("Kapitel 3 - Wirkung aufs Geschäft");
  h1("Klicks, Conversions & Recruiting");

  body(
    "Von 3.412 Seitenaufrufen haben 284 Besucher:innen über den dofollow-Backlink direkt auf Ihre Website gewechselt - eine Click-Through-Rate von 8,3 %. Davon wurden 19 zu qualifizierten Leads (Kontaktformular, Angebotsanfrage, Bewerbung). Rechnerisch ergibt sich ein Cost-per-Lead von 13,03 Euro - deutlich unter dem Branchendurchschnitt für B2B-Mittelstand.",
  );
  doc.moveDown(0.8);

  h2("Conversion-Funnel");
  const funnelY = doc.y + 4;
  const afterFunnel = barChart(funnelY, [
    { label: "Seitenaufrufe Portrait", value: 3412, display: "3.412", color: COLOR.yellow },
    { label: "Scroll ueber 75 %",      value: 2145, display: "2.145", color: COLOR.yellowDark },
    { label: "Klick auf CTA",          value: 412,  display: "412",   color: COLOR.gold },
    { label: "Website-Besuch",         value: 284,  display: "284",   color: COLOR.gold },
    { label: "Qualifizierter Lead",    value: 19,   display: "19",    color: COLOR.black },
  ], { max: 3412 });
  doc.y = afterFunnel + 18;
  resetX();

  h2("Ökonomische Einordnung");
  const endY = table(doc.y + 4, {
    columns: [
      { key: "metric", title: "Kennzahl", width: 240 },
      { key: "value", title: "Wert Q1 2026", width: 130, align: "right" },
      { key: "note", title: "Einordnung", width: 129, align: "right" },
    ],
    rows: [
      { metric: "Investition Q1 (anteilig)",       value: "247,50 Euro",    note: "1/4 von 790 + 99/a" },
      { metric: "Qualifizierte Leads",             value: "19",             note: "via Backlink-Klick" },
      { metric: "Cost-per-Lead",                   value: "13,03 Euro",     note: "B2B-Schnitt ca. 80" },
      { metric: "Bewerbungen (Karriere-Seite)",    value: "6",              note: "3 Einladungen" },
      { metric: "Angebotsanfragen",                value: "4",              note: "2 Auftraege" },
      { metric: "Auftragsvolumen (dokumentiert)",  value: "ca. 41.200 Euro", note: "2 Projekte Q1" },
      { metric: "ROI (konservativ, 1 Quartal)",    value: "Faktor 166",     note: "41.200 / 247,50" },
    ],
  });
  doc.y = endY + 14;
  resetX();
  small(
    "Hinweis: ROI-Angabe beruht auf dokumentierten Aufträgen, die laut Kundenangabe direkt auf den Portraitseiten-Kontakt zurückgehen. Für weitere Projekte ist die Kausalität nicht eindeutig zuordenbar und wurde konservativ nicht eingerechnet.",
  );
}

// =============================================================================
// PAGE 5 - SOCIAL + RECOMMENDATIONS + CONTACT
// =============================================================================
function recommendationsPage() {
  doc.addPage();
  eyebrow("Kapitel 4 - Social Signals");
  h1("Verteilung in sozialen Kanälen");

  body(
    "Die Portraitseite wurde im Berichtszeitraum 37-mal auf Social-Media-Plattformen geteilt - am häufigsten auf LinkedIn (18) und Facebook (12). Auf Instagram wurden Inhalte aus dem Portrait als Story-Highlight mehrfach von SCU-Accounts verwendet.",
  );
  doc.moveDown(0.8);
  const sY = doc.y + 4;
  const afterS = barChart(sY, [
    { label: "LinkedIn",  value: 18, color: COLOR.yellow },
    { label: "Facebook",  value: 12, color: COLOR.yellowDark },
    { label: "Instagram", value: 5,  color: COLOR.gold },
    { label: "WhatsApp",  value: 2,  color: COLOR.gray300 },
  ], { max: 20 });
  doc.y = afterS + 22;
  resetX();

  eyebrow("Kapitel 5 - Empfehlungen für Q2");
  h1("Handlungsempfehlungen");

  const recs = [
    {
      t: "Case-Study-Erweiterung",
      d: "Aufnahme eines konkreten Kundenprojekts mit Bildstrecke - stärkt Rankings für Long-Tail-Keywords wie 'Muster Projekt Referenz 2026'.",
    },
    {
      t: "Karriere-Ausbau",
      d: "Dedizierter Abschnitt 'Ausbildung 2026/27' mit direktem Mailto-Link - aktuell ist die Karriere-Rubrik der zweitstärkste Traffic-Treiber.",
    },
    {
      t: "Zweiter interner Link",
      d: "Platzierung einer kontextuellen Nennung aus dem nächsten Saisonbericht, um den Link-Equity-Fluss innerhalb der SCU-Domain zu stärken.",
    },
    {
      t: "Open-Graph-Bild aktualisieren",
      d: "Neues OG-Bild mit aktuellem Teamfoto erhöht erfahrungsgemäss die LinkedIn-CTR um 15 bis 25 %.",
    },
  ];
  recs.forEach((r) => {
    resetX();
    const y0 = doc.y;
    doc.save();
    doc.circle(MARGIN + 5, y0 + 7, 4).fill(COLOR.yellow);
    doc.restore();
    doc
      .fillColor(COLOR.black)
      .font("Helvetica-Bold")
      .fontSize(10.5)
      .text(r.t, MARGIN + 16, y0, { width: CONTENT_W - 16 });
    doc
      .fillColor(COLOR.gray800)
      .font("Helvetica")
      .fontSize(9.5)
      .text(r.d, MARGIN + 16, doc.y + 1, { width: CONTENT_W - 16, lineGap: 2 });
    doc.moveDown(0.5);
  });
  doc.moveDown(0.3);

  // Contact block
  const cY = doc.y + 4;
  const blockH = 120;
  doc.save().roundedRect(MARGIN, cY, CONTENT_W, blockH, 12).fill(COLOR.black).restore();
  doc.save();
  doc.circle(PAGE_WIDTH - MARGIN - 20, cY + 20, 70).fillOpacity(0.22).fill(COLOR.yellow);
  doc.restore();

  if (fs.existsSync(LOGO_WNS)) {
    try {
      doc.image(LOGO_WNS, MARGIN + 20, cY + 24, { height: 44 });
    } catch {}
  }
  doc
    .fillColor(COLOR.yellow)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("FRAGEN ZUM REPORT?", MARGIN + 190, cY + 22, {
      characterSpacing: 1.8,
      lineBreak: false,
    });
  doc
    .fillColor(COLOR.white)
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Web & Search", MARGIN + 190, cY + 36, { lineBreak: false });
  doc
    .fillColor(COLOR.white)
    .font("Helvetica")
    .fontSize(10)
    .text("info@web-n-search.de", MARGIN + 190, cY + 60, { lineBreak: false });
  doc
    .fillColor(COLOR.white)
    .fontSize(10)
    .text("web-n-search.de", MARGIN + 190, cY + 74, { lineBreak: false });
  doc
    .fillColor(COLOR.white)
    .fillOpacity(0.7)
    .font("Helvetica")
    .fontSize(8.5)
    .text(
      "Reports werden jedes Quartal automatisch erstellt und als PDF per E-Mail zugestellt. Auf Wunsch auch monatlich oder als Live-Dashboard (Looker Studio).",
      MARGIN + 190,
      cY + 92,
      { width: CONTENT_W - 210, lineBreak: false, height: 22 },
    );
  doc.fillOpacity(1);
}

// Footers (skip cover). We keep only the first 5 generated pages.
function addFooters() {
  const total = 5;
  for (let i = 1; i < total; i++) {
    doc.switchToPage(i);
    // Temporarily push the bottom margin to 0 so text() at y=PAGE_HEIGHT-28
    // doesn't trigger a forced page continuation.
    const origBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc.x = MARGIN;
    doc.y = MARGIN;
    const y = PAGE_HEIGHT - 28;
    doc
      .fillColor(COLOR.gray500)
      .font("Helvetica")
      .fontSize(8)
      .text(
        "Beispiel-Report - Sponsoren-Portraitseite - Erstellt von Web & Search für SCU Volleyball",
        MARGIN,
        y,
        { width: CONTENT_W - 70, align: "left", lineBreak: false },
      );
    doc
      .fillColor(COLOR.gray500)
      .font("Helvetica")
      .fontSize(8)
      .text(`Seite ${i + 1} / ${total}`, PAGE_WIDTH - MARGIN - 70, y, {
        width: 70,
        align: "right",
        lineBreak: false,
      });
    doc.page.margins.bottom = origBottom;
  }
}

// =============================================================================
coverPage();
trafficPage();
seoPage();
conversionPage();
recommendationsPage();
addFooters();

doc.end();
console.log(`OK: Report generated: ${path.relative(ROOT, OUTPUT)}`);
