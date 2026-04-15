import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} AI i praktiken
        </p>
        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          Byggt med Claude
          <Sparkles className="w-4 h-4 text-violet-500" />
        </p>
      </div>
    </footer>
  )
}
