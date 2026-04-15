import { motion } from 'framer-motion'
import { Target, Layers, RefreshCw, AlertTriangle, GitBranch, FileText } from 'lucide-react'

const TIPS = [
  {
    icon: Target,
    title: 'Var specifik',
    description: 'Nämn tech stack, kodstil och vad du INTE vill ha',
  },
  {
    icon: Layers,
    title: 'Ge kontext',
    description: 'Berätta vad koden ska göra, inte bara hur den ska se ut',
  },
  {
    icon: RefreshCw,
    title: 'Iterera',
    description: 'Första svaret är ett utkast — bygg vidare med följdfrågor',
  },
  {
    icon: AlertTriangle,
    title: 'Klistra in fel',
    description: 'Lägg alltid med felmeddelandet, inte bara "det funkar inte"',
  },
  {
    icon: GitBranch,
    title: 'Be om alternativ',
    description: 'Fråga efter 3 olika lösningar och välj det bästa',
  },
  {
    icon: FileText,
    title: 'CLAUDE.md',
    description: 'Sätt projektregler i en CLAUDE.md-fil så slipper du förklara varje gång',
  },
]

export default function TipsSection() {
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
            Prompting-tips som faktiskt funkar
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Små justeringar som ger mycket bättre resultat
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIPS.map((tip, i) => {
            const Icon = tip.icon
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm border-l-4 border-l-indigo-500"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{tip.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
