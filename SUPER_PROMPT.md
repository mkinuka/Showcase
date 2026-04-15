# THE SUPER PROMPT
## AI Showcase Website — Complete Build Prompt

> Paste this entire prompt into Claude Code after placing CLAUDE.md in the project root.
> Claude will read CLAUDE.md first, then execute everything below.

---

## Your task

Build a complete, production-ready showcase website from scratch. This site demonstrates how I use AI in my daily work as a web developer. It will be presented live at a team lunch and learn.

Follow the CLAUDE.md guidelines for all technical decisions. Do not ask clarifying questions — make smart creative choices and build everything end-to-end.

---

## What to build — Section by Section

### 1. Project Setup
- Initialize the project exactly as described in CLAUDE.md Setup Instructions
- Delete all Vite boilerplate
- Set up `tailwind.config.ts` with dark mode `class` strategy and extend the theme with the brand colors from CLAUDE.md
- Create `src/lib/utils.ts` with the `cn()` helper (clsx + tailwind-merge)
- Set up React Router in `main.tsx` with a single route for the landing page

---

### 2. Layout & Navigation
**File: `src/components/layout/Header.tsx`**
- Sticky top navigation
- Left: Logo — a small AI chip icon (Lucide) + "AI i praktiken" as wordmark
- Center: Nav links — "Hur det funkar", "Verktyg", "Demos", "Om mig"
- Right: Dark mode toggle button (sun/moon icon)
- Mobile: hamburger menu that opens a slide-down drawer
- Blur backdrop on scroll (`backdrop-blur-md bg-white/80`)

**File: `src/components/layout/Footer.tsx`**
- Simple one-row footer: copyright left, "Byggt med Claude" right with a small sparkle icon

---

### 3. Hero Section
**File: `src/components/sections/HeroSection.tsx`**
- Full viewport height (`min-h-screen`)
- Large headline: *"Så använder jag AI för att bygga bättre webbplatser, snabbare"*
- Subtitle: *"En praktisk genomgång av hur AI-verktyg är en del av mitt dagliga arbete — från idé till färdig kod."*
- Two CTA buttons: primary "Se hur det funkar" (scrolls to workflow section) + ghost "Kolla demo-koden"
- Animated background: subtle floating gradient orbs (indigo + violet, very low opacity)
- A floating "live terminal" card on the right side showing a fake but realistic Claude prompt/response — animate it so text appears to be typed out character by character
- Entrance: headline and subtitle fade in from below, terminal card slides in from the right

---

### 4. Stats Bar
**File: `src/components/sections/StatsSection.tsx`**
- A full-width band between hero and next section
- 4 animated counters that count up when scrolled into view:
  - "~60%" — Tid sparad på repetitiva uppgifter
  - "3x" — Snabbare första utkast av komponenter
  - "100%" — Av mina projekt använder AI på något sätt
  - "1 prompt" — Räcker ofta för att komma igång
- Subtle divider line above and below
- Background: `slate-50` light / `slate-900` dark

---

### 5. Workflow Section — "Hur det funkar"
**File: `src/components/sections/WorkflowSection.tsx`**
- Section title: "Från idé till kod på minuter"
- A horizontal step-by-step flow (3 steps on desktop, vertical on mobile):
  1. **Beskriv problemet** — "Jag förklarar vad jag vill bygga i klartext, som om jag pratar med en kollega"
  2. **AI genererar utkast** — "Claude skriver ett första utkast med rätt tech stack, struktur och namngivning"
  3. **Jag förfinar & levererar** — "Jag granskar, tweakar och slår ihop — ofta utan att skriva ett enda kodblock själv"
- Each step has: number badge, icon, title, description
- Animated connector line between steps
- Below the steps: a realistic before/after comparison card showing a rough prompt on the left and the resulting clean component code on the right (use a `<pre>` block styled as a code editor)

---

### 6. Tools Section — "Verktygen jag använder"
**File: `src/components/sections/ToolsSection.tsx`**
- Section title: "AI-verktygen i min verktygslåda"
- A responsive grid of tool cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card has: logo/icon, tool name, one-line description, colored category badge
- Tools to include (make up realistic icons/colors):
  1. **Claude** — "Kodgenerering, refaktorering, pull request-beskrivningar" — badge: "Kodning"
  2. **Claude Code** — "Terminal-baserad AI som arbetar direkt i mitt projekt" — badge: "Kodning"  
  3. **Cursor** — "AI-driven editor med inline-förslag och chat" — badge: "Editor"
  4. **v0 by Vercel** — "Snabba UI-utkast direkt från beskrivning" — badge: "UI"
  5. **GitHub Copilot** — "Autocomplete och inline kodförslag" — badge: "Kodning"
  6. **Perplexity** — "Snabba tekniska svar utan hallucination-risk" — badge: "Research"
- Hover: card lifts slightly, badge glows

---

### 7. Use Cases Section — "Vad jag faktiskt använder det till"
**File: `src/components/sections/UseCasesSection.tsx`**
- Section title: "Konkreta saker AI hjälper mig med varje dag"
- A two-column layout (single column mobile): left is a list of use case tabs, right shows detail
- Use cases (clickable tabs):
  1. **Komponentgenerering** — Describe it, get a full typed React component with props, Tailwind classes and all
  2. **Kod-review** — Paste a function, get improvement suggestions, edge case warnings, readability tips
  3. **Felsökning** — Share an error + stack trace, get a precise explanation and fix
  4. **CSS & layout** — Describe a layout in words, get the Tailwind classes immediately
  5. **Dokumentation** — Generate JSDoc, README sections, PR descriptions automatically
  6. **Namngivning** — When stuck on variable/function names, AI proposes 5 options instantly
- Right panel shows a realistic "chat window" mockup with a sample prompt + AI response for each tab
- Active tab animates in with a fade

---

### 8. Live Demo Section — "Prova själv"
**File: `src/components/sections/DemoSection.tsx`**
- Section title: "Se magin live"
- A card with a textarea where the user types a component description (in Swedish or English)
- A "Generera med AI" button
- Calls the Anthropic API (`https://api.anthropic.com/v1/messages`) using `claude-sonnet-4-20250514`
- Streams the response into a code block below (show characters appearing in real time)
- Below the streaming code: a small note "Detta är ett riktigt API-anrop till Claude — live, just nu"
- Handle loading state (animated spinner), error state, and empty state gracefully
- Prefill the textarea with a good example prompt so people can just hit the button

**API call implementation:**
```typescript
// Use streaming with fetch, not a library
// Model: claude-sonnet-4-20250514
// Max tokens: 1000
// System prompt: "You are a React/TypeScript expert. Generate a clean, typed React component using Tailwind CSS. Return only the code, no explanation."
// Show streamed text in a <pre> block with syntax highlighting
```

---

### 9. Tips Section — "Bra att veta"
**File: `src/components/sections/TipsSection.tsx`**
- Section title: "Prompting-tips som faktiskt funkar"
- 6 tip cards in a 3x2 grid:
  1. **Var specifik** — "Nämn tech stack, kodstil och vad du INTE vill ha"
  2. **Ge kontext** — "Berätta vad koden ska göra, inte bara hur den ska se ut"
  3. **Iterera** — "Första svaret är ett utkast — bygg vidare med följdfrågor"
  4. **Klistra in fel** — "Lägg alltid med felmeddelandet, inte bara 'det funkar inte'"
  5. **Be om alternativ** — "Fråga efter 3 olika lösningar och välj det bästa"
  6. **CLAUDE.md** — "Sätt projektregler i en CLAUDE.md-fil så slipper du förklara varje gång"
- Each card: icon, bold title, short description
- Subtle indigo-tinted left border accent

---

### 10. About Section — "Om mig"
**File: `src/components/sections/AboutSection.tsx`**
- Section title: "Vem är jag?"
- Two columns: left is an avatar placeholder (large rounded square with initials or abstract shape), right is text
- Text: brief description of role (web developer who builds modern websites and actively uses AI in the workflow)
- A list of 4 skills/traits with checkmark icons: "React & TypeScript", "AI-driven development", "Snabb prototyping", "Fokus på kodkvalitet"
- A subtle quote callout: *"AI ersätter inte mig — det förstärker vad jag kan göra på en dag."*

---

### 11. Final CTA Section
**File: `src/components/sections/CTASection.tsx`**
- Full-width gradient section (indigo to violet)
- Large white headline: "Nyfiken på att börja?"  
- Subtext: "CLAUDE.md-filen från det här projektet finns tillgänglig — ta den och anpassa till ditt eget workflow."
- Two buttons: "Ladda ner CLAUDE.md" (links to the file) + "Se källkoden" (links to GitHub, placeholder URL)
- Centered, generous padding

---

## Page Assembly
**File: `src/pages/HomePage.tsx`**

Import and render all sections in order:
1. HeroSection
2. StatsSection
3. WorkflowSection
4. ToolsSection
5. UseCasesSection
6. DemoSection
7. TipsSection
8. AboutSection
9. CTASection

Each section should have an `id` prop matching its nav link (e.g. `id="hur-det-funkar"`) for smooth scroll navigation.

---

## README.md

Create a proper `README.md` at the project root with:
- Project name and description
- Screenshot placeholder (`![Screenshot](./screenshot.png)`)
- Tech stack list
- Getting started (clone → install → dev)
- Folder structure (copy from CLAUDE.md)
- How to customize (how to update content in `/data/`)
- How to deploy (Vercel one-click deploy badge)
- Note about CLAUDE.md and how it works

---

## Final Checklist before finishing

Before you consider this done, verify:
- [ ] `tsc --noEmit` passes with zero errors
- [ ] All sections render on mobile 375px without horizontal scroll
- [ ] Dark mode toggle works and every section looks good in dark
- [ ] The live demo API call works and streams correctly
- [ ] Smooth scroll navigation from the header links works
- [ ] No Lorem ipsum text anywhere — all content is in Swedish and realistic
- [ ] Framer Motion animations play on first scroll into view
- [ ] Run `npm run build` — it must complete without errors

---

*Built with Claude. Presented at Lunch & Learn. Made to impress.*
