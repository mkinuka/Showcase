import { useState, useEffect, useRef, useCallback } from 'react'

export function useTypewriter(text: string, speed = 30) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const indexRef = useRef(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  const reset = useCallback(() => {
    indexRef.current = 0
    setDisplayedText('')
    setIsComplete(false)
    setHasStarted(true)
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    indexRef.current = 0
    setDisplayedText('')
    setIsComplete(false)

    const interval = setInterval(() => {
      indexRef.current++
      if (indexRef.current >= text.length) {
        setDisplayedText(text)
        setIsComplete(true)
        clearInterval(interval)
      } else {
        setDisplayedText(text.slice(0, indexRef.current))
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, hasStarted])

  return { ref, displayedText, isComplete, reset }
}
