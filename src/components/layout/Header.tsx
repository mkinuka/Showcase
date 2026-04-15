import { useState } from 'react'
import { Cpu, Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useDarkMode } from '@/hooks/use-dark-mode'

const NAV_LINKS = [
  { label: 'Hur det funkar', href: '#hur-det-funkar' },
  { label: 'Verktyg', href: '#verktyg' },
  { label: 'Demos', href: '#demos' },
  { label: 'Om mig', href: '#om-mig' },
]

export default function Header() {
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-slate-900 dark:text-white">
            <Cpu className="w-6 h-6 text-indigo-600" />
            <span className="font-semibold tracking-tight text-lg">AI i praktiken</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Byt tema"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Meny"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 border-t border-slate-200 dark:border-slate-800',
          menuOpen ? 'max-h-64' : 'max-h-0 border-t-0'
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
