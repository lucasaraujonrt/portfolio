'use client'
import type React from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { TOPIC_IDS, type Dict, type TopicId } from '@/lib/i18n'
import { Avatar } from './avatar'
import { AskForm } from './ask-form'
import { chip } from './styles'

const MAX_TILT = 6
const TILT_SPRING = { stiffness: 150, damping: 26 }

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value))
}

type HeroProps = {
  dict: Dict
  onSubmit: (text: string) => void
  onPick: (topic: TopicId) => void
}

export function Hero({ dict, onSubmit, onPick }: HeroProps) {
  const reduce = useReducedMotion()
  const targetX = useMotionValue(0)
  const targetY = useMotionValue(0)
  const rotateY = useSpring(targetX, TILT_SPRING)
  const rotateX = useSpring(targetY, TILT_SPRING)

  return (
    <section
      id="top"
      className="flex flex-col items-center gap-5 pt-2 text-center sm:pt-6"
      onPointerMove={(event) => {
        if (reduce || event.pointerType !== 'mouse') return
        const rect = event.currentTarget.getBoundingClientRect()
        const x =
          (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
        const y =
          (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
        targetX.set(clamp(x) * MAX_TILT)
        targetY.set(-clamp(y) * MAX_TILT)
      }}
      onPointerLeave={() => {
        targetX.set(0)
        targetY.set(0)
      }}
    >
      <p className="rise-in text-lg font-medium text-zinc-700">
        {dict.hero.greeting}
      </p>
      <h1
        style={{ '--rise-i': 1 } as React.CSSProperties}
        className="rise-in max-w-[14ch] text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.04em] text-balance"
      >
        {dict.hero.headline}
      </h1>
      <div className="rise-in" style={{ '--rise-i': 2 } as React.CSSProperties}>
        <Avatar
          layoutId="avatar"
          alt={dict.avatarAlt}
          src="/avatar-smile.png"
          hoverSrc="/avatar-wink.png"
          className="size-36 sm:size-44 lg:size-56"
          rotateX={reduce ? undefined : rotateX}
          rotateY={reduce ? undefined : rotateY}
        />
      </div>
      <div
        className="rise-in w-full max-w-[560px]"
        style={{ '--rise-i': 3 } as React.CSSProperties}
      >
        <AskForm
          inputId="ask-home"
          label={dict.hero.label}
          placeholders={dict.hero.placeholders}
          sendLabel={dict.hero.send}
          cycle
          onSubmit={onSubmit}
        />
      </div>
      <nav
        aria-label={dict.hero.topicsLabel}
        style={{ '--rise-i': 4 } as React.CSSProperties}
        className="rise-in flex max-w-[760px] flex-wrap justify-center gap-2.5"
      >
        {TOPIC_IDS.map((topic) => (
          <button
            key={topic}
            type="button"
            className={chip}
            onClick={() => onPick(topic)}
          >
            {dict.topics[topic].label}
          </button>
        ))}
      </nav>
    </section>
  )
}
