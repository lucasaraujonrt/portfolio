import type { Variants } from 'motion/react'

export const EASE_OUT = [0.23, 1, 0.32, 1] as const

export const rise: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
}

export function stagger(delay = 0, step = 0.06): Variants {
  return {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: step } },
  }
}
