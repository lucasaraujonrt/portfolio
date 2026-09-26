'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, Transition, motion } from 'motion/react'
import { Children, cloneElement, ReactElement, ReactNode, useId, useState } from 'react'

type AnimatedChildProps = {
  'data-id': string
  className?: string
  children?: ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  'data-checked'?: 'true' | 'false'
}

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<AnimatedChildProps>[]
    | ReactElement<AnimatedChildProps>
  className?: string
  transition?: Transition
}

export function AnimatedBackground({
  children,
  className,
  transition,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  return Children.map(children, (child: ReactElement<AnimatedChildProps>, index) => {
    const id = child.props['data-id']

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        onMouseEnter: () => setActiveId(id),
        onMouseLeave: () => setActiveId(null),
      },
      <AnimatePresence initial={false}>
        {activeId === id ? (
          <motion.div
            key={id}
            layoutId={`background-${uniqueId}`}
            className={cn('absolute inset-0', className)}
            transition={transition}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          />
        ) : null}
      </AnimatePresence>,
      <div className="relative z-10">{child.props.children}</div>,
    )
  })
}
