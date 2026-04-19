# SCU Emlichheim Volleyball

Offizielle Website der Volleyball-Abteilung des SC Union Emlichheim e. V. — 2. Bundesliga Pro Damen, Saison 2025/26.

## Tech-Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (@theme, @tailwindcss/postcss)
- **Framer Motion 12** für Animationen
- **shadcn/ui** Pattern + **Radix** Primitives
- **next/font** (Inter + Archivo Black)

## Lokale Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Deployment

Automatisches Deployment über **Vercel** — jeder Push auf `main` deployed zur Produktion.

## Struktur

```
src/
├── app/              # Next.js App Router Pages
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Homepage-Sections
│   └── ui/           # shadcn-style Components
└── lib/              # Config & Daten (teams, roster, sponsors, news)
public/
├── hero/             # Hero-Bilder
├── logos/            # SCU + Sponsoren-Logos
├── sponsors/         # Sponsoren-Logos
└── team/             # Teamfotos
```

## Design-System

- **Primärfarben:** SCU-Gelb `#FFF001`, Schwarz `#0a0a0a`
- **Fonts:** Archivo Black (Display), Inter (Body)
- **Break-Points:** Mobile-first, `sm` 640px, `md` 768px, `lg` 1024px

---

Gebaut mit Herz in Emlichheim von [web-n-search.de](https://web-n-search.de)
