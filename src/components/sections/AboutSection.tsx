import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const SKILLS = [
  'React & TypeScript',
  'AI-driven development',
  'Snabb prototyping',
  'Fokus på kodkvalitet',
]

export default function AboutSection() {
  return (
    <section id="om-mig" className="py-20 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Vem är jag?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-600/20">
              <span className="text-6xl font-bold text-white/90">MK</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Jag är webbutvecklare som bygger moderna webbplatser och aktivt använder AI i mitt dagliga arbetsflöde. 
              Genom att kombinera traditionell utvecklingskompetens med AI-verktyg kan jag leverera snabbare, 
              med högre kvalitet och mer kreativa lösningar.
            </p>

            <ul className="mt-8 space-y-3">
              {SKILLS.map(skill => (
                <li key={skill} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 pl-4 border-l-4 border-indigo-500 italic text-slate-600 dark:text-slate-400">
              "AI ersätter inte mig — det förstärker vad jag kan göra på en dag."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
