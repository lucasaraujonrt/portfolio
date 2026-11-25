'use client'
import { useRef, useState, useSyncExternalStore } from 'react'
import { MotionConfig } from 'motion/react'
import { isTopicId, matchTopic, type Dict, type TopicId } from '@/lib/i18n'
import { Avatar } from './avatar'
import { Conversation, type Turn } from './conversation'
import { Hero } from './hero'
import { getHash, getServerHash, pushHash, subscribeHash } from './hash-store'
import { chip, focusRing } from './styles'

const OTHER_LOCALES = [
  { path: '/', label: 'PT', name: 'Português', lang: 'pt-BR' },
  { path: '/en', label: 'EN', name: 'English', lang: 'en' },
] as const

function LanguageSwitch({ dict, hash }: { dict: Dict; hash: string }) {
  const suffix = isTopicId(hash) ? `#${hash}` : ''
  return (
    <div
      role="group"
      aria-label={dict.header.languageLabel}
      className="flex rounded-full border border-zinc-300 p-0.5"
    >
      {OTHER_LOCALES.map((item) => {
        const active = item.path === dict.path
        return (
          <a
            key={item.label}
            href={`${item.path}${suffix}`}
            hrefLang={item.lang}
            lang={item.lang}
            aria-label={item.name}
            aria-current={active ? 'true' : undefined}
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors duration-150 ${focusRing} ${
              active
                ? 'bg-neutral-950 text-white'
                : 'text-neutral-950 hover:bg-zinc-100'
            }`}
          >
            {item.label}
          </a>
        )
      })}
    </div>
  )
}

export function HomeClient({
  dict,
  children,
}: {
  dict: Dict
  children: React.ReactNode
}) {
  const hash = useSyncExternalStore(subscribeHash, getHash, getServerHash)
  const [turns, setTurns] = useState<Turn[]>([])
  const [epoch, setEpoch] = useState(0)
  const [seenHash, setSeenHash] = useState('')
  const focusAnswer = useRef(false)

  if (hash !== seenHash) {
    setSeenHash(hash)
    if (isTopicId(hash)) {
      if (turns.at(-1)?.topic !== hash) {
        setTurns([{ question: dict.topics[hash].question, topic: hash }])
        setEpoch((value) => value + 1)
      }
    } else if (hash === '' && turns.length > 0) {
      setTurns([])
      setEpoch((value) => value + 1)
    }
  }

  const inConversation = turns.length > 0

  function ask(topic: TopicId | null, question: string, fromInput: boolean) {
    focusAnswer.current = !fromInput
    setTurns((previous) => [...previous, { question, topic }])
    if (topic) pushHash(topic)
  }

  function submit(text: string) {
    ask(matchTopic(text), text, true)
  }

  function pick(topic: TopicId) {
    ask(topic, dict.topics[topic].question, false)
  }

  function reset() {
    focusAnswer.current = false
    setTurns([])
    setEpoch((value) => value + 1)
    pushHash('')
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`mx-auto flex min-h-dvh w-full flex-1 flex-col px-5 font-[family-name:var(--font-geist)] text-neutral-950 ${
          inConversation ? 'max-w-[920px]' : 'max-w-[1040px]'
        }`}
      >
        <header className="flex flex-wrap items-center justify-between gap-3 pt-5">
          {inConversation ? (
            <button
              type="button"
              onClick={reset}
              aria-label={dict.header.back}
              className={`flex items-center gap-3 rounded-full py-1 pr-3 ${focusRing}`}
            >
              <Avatar
                layoutId="avatar"
                alt={dict.avatarAlt}
                src="/avatar-smile.png"
                className="size-11"
              />
              <span className="text-base font-semibold">
                {dict.header.name}
              </span>
            </button>
          ) : (
            <span className="py-3 text-base font-semibold">
              {dict.header.name}
            </span>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {!inConversation && (
              <a href="#skim" className={`${chip} hidden sm:inline-flex`}>
                {dict.header.skim}
              </a>
            )}
            <LanguageSwitch dict={dict} hash={hash} />
          </div>
        </header>

        {inConversation ? (
          <Conversation
            dict={dict}
            turns={turns}
            epoch={epoch}
            focusAnswer={focusAnswer}
            onSubmit={submit}
            onPick={pick}
          />
        ) : (
          <div className="flex flex-col gap-[72px] pt-4 pb-[72px]">
            <Hero dict={dict} onSubmit={submit} onPick={pick} />
            {children}
          </div>
        )}
      </div>
    </MotionConfig>
  )
}
