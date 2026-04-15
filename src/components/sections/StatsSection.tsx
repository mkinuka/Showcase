import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/use-count-up'

const STATS = [
  { value: '~60%', label: 'Tid sparad på repetitiva uppgifter' },
  { value: '3x', label: 'Snabbare första utkast av komponenter' },
  { value: '100%', label: 'Av mina projekt använder AI på något sätt' },
  { value: '1', label: 'Prompt räcker ofta för att komma igång' },
]

interface StatCardProps {
  value: string
  label: string
  index: number
}

function StatCard({ value, label, index }: StatCardProps) {
  const { ref, displayValue } = useCountUp(value, 1500)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <p className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">
        {displayValue}
      </p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
