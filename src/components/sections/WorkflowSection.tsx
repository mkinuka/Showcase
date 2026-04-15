import { motion } from 'framer-motion'
import { MessageSquare, Wand2, Rocket } from 'lucide-react'

const STEPS = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Beskriv problemet',
    description: 'Jag förklarar vad jag vill bygga i klartext, som om jag pratar med en kollega',
  },
  {
    number: 2,
    icon: Wand2,
    title: 'AI genererar utkast',
    description: 'Claude skriver ett första utkast med rätt tech stack, struktur och namngivning',
  },
  {
    number: 3,
    icon: Rocket,
    title: 'Jag förfinar & levererar',
    description: 'Jag granskar, tweakar och slår ihop — ofta utan att skriva ett enda kodblock själv',
  },
]

const PROMPT_EXAMPLE = `"Bygg en kortkomponent med bild, titel, 
beskrivning och en badge. Använd TypeScript, 
Tailwind och se till att den har hover-animation."`

const CODE_EXAMPLE = `interface CardProps {
  image: string
  title: string
  description: string
  badge: string
}

export default function Card({ 
  image, title, description, badge 
}: CardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 
      bg-white shadow-sm hover:shadow-lg 
      hover:scale-[1.02] transition-all duration-200">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl" 
      />
      <div className="p-6">
        <span className="text-xs font-medium px-2.5 py-1 
          rounded-full bg-indigo-100 text-indigo-700">
          {badge}
        </span>
        <h3 className="mt-3 font-semibold text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}`

export default function WorkflowSection() {
  return (
    <section id="hur-det-funkar" className="py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Från idé till kod på minuter
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tre enkla steg som beskriver mitt arbetsflöde med AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-indigo-200 via-violet-300 to-indigo-200 dark:from-indigo-800 dark:via-violet-700 dark:to-indigo-800" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold relative z-10 shadow-lg shadow-indigo-600/25">
                  {step.number}
                </div>
                <div className="mt-4 p-2">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mx-auto" />
                </div>
                <h3 className="mt-2 font-semibold text-lg text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 grid md:grid-cols-2 gap-0 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg"
        >
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Prompten
            </p>
            <pre className="text-sm font-mono text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
              {PROMPT_EXAMPLE}
            </pre>
          </div>
          <div className="bg-slate-900 p-6">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
              Resultatet
            </p>
            <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {CODE_EXAMPLE}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
