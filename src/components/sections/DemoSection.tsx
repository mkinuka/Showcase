import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Loader2 } from 'lucide-react'

const DEFAULT_PROMPT = `En responsive pricing-tabell med tre kolumner: Basic, Pro och Enterprise. 
Varje kolumn ska ha pris, en lista med features och en CTA-knapp. 
Pro-kolumnen ska vara markerad som "Populärast" med en badge.
Använd TypeScript, Tailwind CSS och shadcn/ui Button.`

const SYSTEM_PROMPT = 'You are a React/TypeScript expert. Generate a clean, typed React component using Tailwind CSS. Return only the code, no explanation.'

export default function DemoSection() {
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT)
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return

    setOutput('')
    setError(null)
    setIsLoading(true)
    abortRef.current?.abort()

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY ?? '',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          stream: true,
          messages: [{ role: 'user', content: prompt }],
        }),
        signal: controller.signal,
      })

      if (!response.ok) {
        const err = await response.text()
        throw new Error(`API-fel: ${response.status} — ${err}`)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('Ingen stream tillgänglig')

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') continue
            try {
              const parsed = JSON.parse(data)
              if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                setOutput(prev => prev + parsed.delta.text)
              }
            } catch {
              // skip non-JSON lines
            }
          }
        }
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return
      setError(err instanceof Error ? err.message : 'Något gick fel')
    } finally {
      setIsLoading(false)
    }
  }, [prompt, isLoading])

  return (
    <section id="demos" className="py-20 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Se magin live
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Skriv en beskrivning och låt Claude generera koden åt dig
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Beskriv komponenten du vill bygga
            </label>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Beskriv din komponent här..."
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-lg shadow-indigo-600/25"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Genererar...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generera med AI
                </>
              )}
            </button>
          </div>

          {(output || error) && (
            <div className="border-t border-slate-200 dark:border-slate-700">
              {error ? (
                <div className="p-6">
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                </div>
              ) : (
                <div className="bg-slate-900 p-6">
                  <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                    {output}
                    {isLoading && <span className="animate-pulse">▊</span>}
                  </pre>
                </div>
              )}
            </div>
          )}

          {output && !isLoading && (
            <div className="px-6 py-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30">
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Detta är ett riktigt API-anrop till Claude — live, just nu
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
