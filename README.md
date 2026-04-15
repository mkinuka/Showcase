# AI i praktiken

> En showcase-webbplats som visar hur AI används i daglig webbutveckling.

![Screenshot](./screenshot.png)

## Tech Stack

- **React 18** med **TypeScript** (strict mode)
- **Vite** som build-verktyg
- **Tailwind CSS v4** (utility-first)
- **Framer Motion** för animationer
- **Lucide React** för ikoner
- **React Router v6** för routing

## Kom igång

```bash
# Klona repot
git clone https://github.com/mkinuka/Showcase.git
cd Showcase

# Installera beroenden
npm install

# Starta utvecklingsservern
npm run dev
```

## Live Demo (valfritt)

För att aktivera live-demon med Anthropic API:

```bash
# Skapa en .env-fil med din API-nyckel
echo "VITE_ANTHROPIC_API_KEY=din-nyckel-här" > .env
```

## Projektstruktur

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   └── sections/        # Alla sektioner (Hero, Tools, Demo etc.)
├── pages/               # En fil per route
├── hooks/               # Custom React hooks
├── lib/                 # Utilities och hjälpfunktioner
├── types/               # TypeScript interfaces
└── assets/              # Bilder, SVG:er
```

## Anpassa innehållet

Alla textstycken och data finns direkt i respektive komponentfil under `src/components/sections/`. Ändra texten där för att anpassa till ditt eget projekt.

## Deploy

Klicka här för att deploya direkt till Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mkinuka/Showcase)

## CLAUDE.md

Projektet använder en `CLAUDE.md`-fil som styr hur AI-assistenter arbetar med koden. Den innehåller regler för tech stack, kodstil, designsystem och projektstruktur. Lägg den i roten av ditt projekt så följer Claude (och andra AI-verktyg) dina riktlinjer automatiskt.
