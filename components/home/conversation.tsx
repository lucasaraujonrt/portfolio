'use client'
import { useEffect, useRef, type RefObject } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import type { Dict, TopicId } from '@/lib/i18n'
import { AskForm } from './ask-form'
import { Answer } from './answers'
import { rise, stagger } from './motion'

export type Turn = { question: string; topic: TopicId | null }

type ConversationProps = {
  dict: Dict
  turns: readonly Turn[]
  epoch: number
  focusAnswer: RefObject<boolean>
  onSubmit: (text: string) => void
  onPick: (topic: TopicId) => void
}

export function Conversation({
  dict,
  turns,
  epoch,
  focusAnswer,
  onSubmit,
  onPick,
}: ConversationProps) {
  const reduce = useReducedMotion()
  const lastRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = lastRef.current
    if (!element) return
    if (turns.length === 1) {
      window.scrollTo({ top: 0 })
    } else {
      element.scrollIntoView({
        block: 'start',
        behavior: reduce ? 'auto' : 'smooth',
      })
    }
    if (focusAnswer.current) element.focus({ preventScroll: true })
  }, [epoch, turns.length, reduce, focusAnswer])

  return (
    <div className="flex flex-1 flex-col gap-7 pt-7">
      <div role="log" aria-live="polite" className="flex flex-col gap-10">
        {turns.map((turn, index) => {
          const isLast = index === turns.length - 1
          return (
            <motion.article
              key={`${epoch}-${index}`}
              ref={isLast ? lastRef : undefined}
              tabIndex={-1}
              variants={stagger(0, 0.07)}
              initial="hidden"
              animate="show"
              className="flex scroll-mt-4 flex-col gap-5 outline-none"
            >
              <motion.div variants={rise} className="flex justify-end">
                <p className="max-w-[80%] rounded-[20px_20px_4px_20px] bg-neutral-950 px-[18px] py-3 text-base text-white">
                  {turn.question}
                </p>
              </motion.div>
              <Answer
                topic={turn.topic}
                dict={dict}
                onPick={onPick}
                isLast={isLast}
              />
            </motion.article>
          )
        })}
      </div>
      <div className="sticky bottom-0 z-10 mt-auto bg-white pb-5 pt-3">
        <AskForm
          inputId="ask-follow-up"
          label={dict.hero.followUpLabel}
          placeholders={[dict.hero.followUpLabel]}
          sendLabel={dict.hero.send}
          cycle={false}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}
