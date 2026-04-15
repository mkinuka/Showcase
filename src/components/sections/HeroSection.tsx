import { motion } from 'framer-motion'
import { ArrowDown, Code2 } from 'lucide-react'
import { useTypewriter } from '@/hooks/use-typewriter'

const TERMINAL_PROMPT = `> Bygg en responsiv hero-sektion med gradient-bakgrund, 
  animerad text och CTA-knappar i React + Tailwind.`

const TERMINAL_RESPONSE = `import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center 
      bg-gradient-to-br from-indigo-50 to-violet-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold tracking-tight"
        >
          Välkommen till framtiden
        </motion.h1>
        <div className="mt-8 flex gap-4 justify-center">
          <Button variant="default">Kom igång</Button>
          <Button variant="ghost">Läs mer</Button>
        </div>
      </div>
    </section>
  )
}`

export default function HeroSection() {
  const { ref, displayedText } = useTypewriter(
    TERMINAL_PROMPT + '\n\n' + TERMINAL_RESPONSE,
    18
  )

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-400/20 dark:bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-300/15 dark:bg-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Så använder jag AI för att bygga{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              bättre webbplatser
            </span>
            , snabbare
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            En praktisk genomgång av hur AI-verktyg är en del av mitt dagliga arbete — från idé till färdig kod.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#hur-det-funkar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-600/25"
            >
              Se hur det funkar
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            >
              <Code2 className="w-4 h-4" />
              Kolla demo-koden
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 dark:bg-slate-900 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-slate-400 font-mono">claude — ~/project</span>
            </div>
            <pre className="p-4 text-sm font-mono text-green-400 leading-relaxed overflow-hidden h-80">
              <code>{displayedText}<span className="animate-pulse">▊</span></code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
