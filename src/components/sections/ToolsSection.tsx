import { motion } from 'framer-motion'
import { Bot, Terminal, MousePointerClick, Palette, Code2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const BADGE_COLORS: Record<string, string> = {
  'Kodning': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
  'Editor': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
  'UI': 'bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
  'Research': 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
}

const TOOLS = [
  {
    name: 'Claude',
    description: 'Kodgenerering, refaktorering, pull request-beskrivningar',
    badge: 'Kodning',
    icon: Bot,
  },
  {
    name: 'Claude Code',
    description: 'Terminal-baserad AI som arbetar direkt i mitt projekt',
    badge: 'Kodning',
    icon: Terminal,
  },
  {
    name: 'Cursor',
    description: 'AI-driven editor med inline-förslag och chat',
    badge: 'Editor',
    icon: MousePointerClick,
  },
  {
    name: 'v0 by Vercel',
    description: 'Snabba UI-utkast direkt från beskrivning',
    badge: 'UI',
    icon: Palette,
  },
  {
    name: 'GitHub Copilot',
    description: 'Autocomplete och inline kodförslag',
    badge: 'Kodning',
    icon: Code2,
  },
  {
    name: 'Perplexity',
    description: 'Snabba tekniska svar utan hallucination-risk',
    badge: 'Research',
    icon: Search,
  },
]

export default function ToolsSection() {
  return (
    <section id="verktyg" className="py-20 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            AI-verktygen i min verktygslåda
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            De verktyg jag använder varje dag för att jobba smartare
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span
                    className={cn(
                      'text-xs font-medium px-2.5 py-1 rounded-full transition-shadow duration-200 group-hover:shadow-md',
                      BADGE_COLORS[tool.badge]
                    )}
                  >
                    {tool.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
