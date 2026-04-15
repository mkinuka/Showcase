# CLAUDE.md — AI Showcase Project Guidelines

> This file is read automatically by Claude before every task. Follow all instructions here precisely. Do not deviate unless explicitly told to in the prompt.

---

## 🎯 Project Purpose

This is a **public-facing showcase website** that demonstrates how AI is used in day-to-day web development work. It should look polished, professional, and impressive enough to present live at a team event. Think: a slick portfolio meets an interactive demo.

---

## 🛠 Tech Stack — Non-negotiable

| Layer | Choice |
|---|---|
| Framework | **React 18** with **TypeScript** (strict mode) |
| Build tool | **Vite** |
| Styling | **Tailwind CSS v3** (utility-first, no custom CSS files unless unavoidable) |
| Component library | **shadcn/ui** (for buttons, cards, dialogs etc.) |
| Icons | **Lucide React** |
| Animations | **Framer Motion** (subtle, professional — never flashy) |
| Routing | **React Router v6** |
| State | Local React state + Context where needed. No Redux. |
| Type safety | TypeScript strict mode. No `any`. All props typed with interfaces. |

---

## 📁 Project Structure

Always follow this exact folder structure:

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (auto-generated, do not edit)
│   ├── layout/          # Header, Footer, Layout wrapper
│   └── sections/        # Page sections (Hero, Features, Demo, etc.)
├── pages/               # One file per route
├── hooks/               # Custom React hooks (useX naming)
├── lib/                 # Utilities, helpers, constants
│   └── utils.ts         # cn() helper and other utils
├── types/               # Shared TypeScript interfaces and types
├── data/                # Static data, mock content (JSON or TS)
└── assets/              # Images, SVGs
```

---

## 🎨 Design System

### Palette
- **Primary**: Indigo/violet tones (`indigo-600`, `violet-600`)
- **Background**: Near-white (`slate-50`) in light, deep navy (`slate-950`) in dark
- **Text**: `slate-900` primary, `slate-500` muted
- **Accent**: `emerald-500` for highlights and success states

### Typography
- Headings: `font-bold` or `font-semibold`, tight tracking (`tracking-tight`)
- Body: `text-base` or `text-sm`, `leading-relaxed`
- Code/mono: `font-mono` with `bg-slate-100` pill styling

### Component Rules
- All cards: `rounded-2xl`, `border border-slate-200`, `bg-white` with subtle shadow
- Buttons: use shadcn/ui `<Button>` component, never raw `<button>` unless inside a form
- Spacing: use Tailwind spacing scale consistently — prefer `p-6`, `gap-4`, `space-y-8`
- Dark mode: support it via Tailwind `dark:` classes. Use `class` strategy in `tailwind.config`.

### Animations
- Page sections: fade-in-up on scroll using Framer Motion `whileInView`
- Hover: subtle scale (`hover:scale-[1.02]`) on cards
- Transitions: `duration-200` for fast UI, `duration-500` for entrances
- Never add animations that delay content visibility by more than 300ms

---

## 📝 Code Style

- **Naming**: PascalCase for components, camelCase for functions/variables, SCREAMING_SNAKE for constants
- **Exports**: Named exports for utilities, default exports for page/component files
- **File naming**: `ComponentName.tsx`, `use-hook-name.ts`, `page-name.tsx`
- **No inline styles** — Tailwind classes only
- **No `console.log`** in final code
- **Comments**: Only where logic is non-obvious. Self-documenting code preferred.
- **Max file length**: ~200 lines. Split into sub-components if longer.
- **Props**: Destructure props at the top of the function. Define interface above the component.

Example:
```tsx
interface HeroSectionProps {
  title: string
  subtitle: string
  ctaLabel?: string
}

export default function HeroSection({ title, subtitle, ctaLabel = 'Läs mer' }: HeroSectionProps) {
  // ...
}
```

---

## 🏗 Setup Instructions

When setting up the project from scratch, run these commands in order:

```bash
# 1. Create Vite + React + TypeScript project
npm create vite@latest ai-showcase -- --template react-ts
cd ai-showcase

# 2. Install dependencies
npm install
npm install react-router-dom framer-motion lucide-react clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Initialize shadcn/ui
npx shadcn-ui@latest init
# Choose: TypeScript, Default style, Slate base color, src/lib/utils.ts, yes to CSS variables

# 4. Add shadcn components used in this project
npx shadcn-ui@latest add button card badge dialog tabs

# 5. Start dev server
npm run dev
```

---

## 🚫 Things to Never Do

- Never use `create-react-app`
- Never use CSS Modules or styled-components
- Never hardcode colors as hex values — use Tailwind classes
- Never skip TypeScript types — every prop, every function return value
- Never use default Vite/React boilerplate (delete it completely)
- Never put business logic inside JSX — extract to hooks or utils
- Never use `setTimeout` for fake loading states

---

## ✅ Definition of Done

A section or component is complete when it:
1. Renders correctly on mobile (375px), tablet (768px), and desktop (1280px)
2. Works in both light and dark mode
3. Has no TypeScript errors (`tsc --noEmit` passes)
4. Has smooth entrance animation
5. Uses real-looking placeholder content (not "Lorem ipsum")
6. Passes a basic visual check — looks polished and professional
