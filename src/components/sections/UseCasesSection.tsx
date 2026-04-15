import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const USE_CASES = [
  {
    title: 'Komponentgenerering',
    description: 'Beskriv komponenten, få en komplett typad React-komponent med props, Tailwind-klasser och allt.',
    prompt: 'Bygg en notifikationskomponent med stöd för success, warning och error. Den ska ha en ikon, meddelande, och en stäng-knapp. Använd TypeScript och Tailwind.',
    response: `interface NotificationProps {
  type: 'success' | 'warning' | 'error'
  message: string
  onClose: () => void
}

const STYLES = {
  success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  warning: 'bg-amber-50 border-amber-200 text-amber-800',
  error: 'bg-red-50 border-red-200 text-red-800',
}

export default function Notification({ 
  type, message, onClose 
}: NotificationProps) {
  return (
    <div className={\`flex items-center gap-3 p-4 
      rounded-xl border \${STYLES[type]}\`}>
      <StatusIcon type={type} />
      <p className="flex-1 text-sm">{message}</p>
      <button onClick={onClose}>✕</button>
    </div>
  )
}`,
  },
  {
    title: 'Kod-review',
    description: 'Klistra in en funktion, få förbättringsförslag, varningar för edge cases och läsbarhetstips.',
    prompt: 'Granska den här funktionen och ge feedback:\n\nfunction getUser(id) {\n  const u = users.find(x => x.id == id)\n  return u\n}',
    response: `Tre förbättringsförslag:

1. **Använd strict equality (===)**
   id == id → id === id (undvik typkonvertering)

2. **Lägg till TypeScript-typer**
   function getUser(id: number): User | undefined

3. **Förenkla — ta bort temporär variabel**
   return users.find(user => user.id === id)

Förbättrad version:
function getUser(id: number): User | undefined {
  return users.find(user => user.id === id)
}`,
  },
  {
    title: 'Felsökning',
    description: 'Dela ett felmeddelande + stack trace, få en precis förklaring och fix.',
    prompt: 'TypeError: Cannot read properties of undefined (reading "map")\n\nat UserList (UserList.tsx:12:18)',
    response: `Problemet: Du försöker anropa .map() på data 
som ännu inte laddats (undefined).

Vanligaste orsaker:
• API-anropet har inte returnerat ännu
• Initialt state är undefined istället för []

Fix — sätt default-värde:
const [users, setUsers] = useState<User[]>([])

Eller villkorlig rendering:
{users?.map(user => (
  <UserCard key={user.id} user={user} />
))}`,
  },
  {
    title: 'CSS & layout',
    description: 'Beskriv en layout i ord, få Tailwind-klasserna direkt.',
    prompt: 'Jag vill ha en sticky sidebar till vänster (250px bred) och ett scrollbart innehållsområde till höger. Desktop only.',
    response: `<div className="flex min-h-screen">
  {/* Sidebar */}
  <aside className="w-64 shrink-0 sticky top-0 
    h-screen overflow-y-auto border-r 
    border-slate-200 bg-white p-6">
    <nav>...</nav>
  </aside>

  {/* Main content */}
  <main className="flex-1 p-8 overflow-y-auto">
    {children}
  </main>
</div>`,
  },
  {
    title: 'Dokumentation',
    description: 'Generera JSDoc, README-sektioner, PR-beskrivningar automatiskt.',
    prompt: 'Skriv en PR-beskrivning för en ändring som lägger till dark mode-stöd i Header-komponenten.',
    response: `## 🌙 Add dark mode support to Header

### Changes
- Added dark mode toggle button (sun/moon icon)
- Implemented \`useDarkMode\` hook with localStorage
- Updated all Header styles with \`dark:\` variants
- Background switches to slate-950 in dark mode

### Testing
- [x] Toggle works on desktop and mobile
- [x] Preference persists across page reload
- [x] No flash of wrong theme on initial load

### Screenshots
Light: [screenshot]  
Dark: [screenshot]`,
  },
  {
    title: 'Namngivning',
    description: 'När du kör fast på variabel- eller funktionsnamn — AI föreslår 5 alternativ direkt.',
    prompt: 'Jag behöver ett bra namn för en funktion som tar en lista med produkter och returnerar bara de som har lager > 0.',
    response: `5 förslag, från mest till minst beskrivande:

1. filterInStockProducts
2. getAvailableProducts  
3. removeOutOfStock
4. filterByAvailability
5. getProductsWithStock

Rekommendation: getAvailableProducts
• Tydligt, koncist
• Följer get-convention för query-funktioner
• Undviker implementationsdetaljer i namnet`,
  },
]

export default function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCase = USE_CASES[activeIndex]

  return (
    <section className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Konkreta saker AI hjälper mig med varje dag
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Klicka på ett användningsfall för att se ett riktigt exempel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {USE_CASES.map((uc, i) => (
              <button
                key={uc.title}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  'text-left px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap lg:whitespace-normal transition-all duration-200',
                  i === activeIndex
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                )}
              >
                {uc.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden shadow-sm"
            >
              <div className="p-5 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white">{activeCase.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{activeCase.description}</p>
              </div>

              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
                <div className="p-5">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Din prompt</p>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-900 p-4">
                    <pre className="text-sm font-mono text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {activeCase.prompt}
                    </pre>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">AI-svar</p>
                  <div className="rounded-xl bg-slate-900 p-4">
                    <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap leading-relaxed">
                      {activeCase.response}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
