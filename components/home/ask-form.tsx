'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { focusRing } from './styles'

type AskFormProps = {
  inputId: string
  label: string
  placeholders: readonly string[]
  sendLabel: string
  cycle: boolean
  onSubmit: (text: string) => void
}

const CYCLE_MS = 3600

export function AskForm({
  inputId,
  label,
  placeholders,
  sendLabel,
  cycle,
  onSubmit,
}: AskFormProps) {
  const [value, setValue] = useState('')
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const shouldCycle = cycle && !reduce && placeholders.length > 1

  useEffect(() => {
    if (!shouldCycle) return
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % placeholders.length),
      CYCLE_MS,
    )
    return () => window.clearInterval(timer)
  }, [shouldCycle, placeholders.length])

  const placeholder = placeholders[shouldCycle ? index : 0]

  return (
    <motion.form
      layoutId="ask-form"
      layout="position"
      className="flex w-full flex-col gap-2 text-left"
      onSubmit={(event) => {
        event.preventDefault()
        const text = value.trim()
        if (!text) return
        setValue('')
        onSubmit(text)
      }}
    >
      <label htmlFor={inputId} className="text-sm text-zinc-600">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white p-1.5 pl-5 shadow-[0_8px_24px_rgba(10,10,10,0.06)] focus-within:border-blue-700 focus-within:ring-2 focus-within:ring-blue-700/25">
        <div className="relative min-w-0 flex-1">
          <input
            id={inputId}
            type="text"
            autoComplete="off"
            enterKeyHint="send"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="h-11 w-full min-w-0 bg-transparent text-base text-neutral-950 outline-none"
          />
          <AnimatePresence mode="wait" initial={false}>
            {value === '' && (
              <motion.span
                key={placeholder}
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 left-0 flex items-center truncate text-base text-zinc-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="truncate">{placeholder}</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <button
          type="submit"
          aria-label={sendLabel}
          className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white transition-[scale,background-color] duration-150 hover:bg-blue-800 active:scale-[0.97] ${focusRing}`}
        >
          <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />
        </button>
      </div>
    </motion.form>
  )
}
