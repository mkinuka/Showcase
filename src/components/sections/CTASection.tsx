import { motion } from 'framer-motion'
import { Download, ExternalLink } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-16 text-center shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Nyfiken på att börja?
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            CLAUDE.md-filen från det här projektet finns tillgänglig — ta den och anpassa till ditt eget workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/CLAUDE.md"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-700 font-medium hover:bg-indigo-50 transition-colors duration-200 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Ladda ner CLAUDE.md
            </a>
            <a
              href="https://github.com/mkinuka/Showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Se källkoden
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
