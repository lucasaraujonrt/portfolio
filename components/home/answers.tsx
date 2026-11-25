'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import {
  PROJECT_IDS,
  TOPIC_IDS,
  type Dict,
  type TopicId,
} from '@/lib/i18n'
import {
  BLOG_POSTS,
  EMAIL,
  OPEN_SOURCE,
  SOCIAL_LINKS,
  WORK_EXPERIENCE,
} from '@/app/data'
import { ProjectCard } from './project-card'
import { rise, stagger } from './motion'
import { card, chip, focusRing, mono } from './styles'

const lead = 'max-w-[60ch] text-lg text-zinc-800'

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <motion.p variants={rise} className={lead}>
      {children}
    </motion.p>
  )
}

function ExternalRow({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={card}
    >
      <span className="flex items-center gap-1.5 text-lg font-semibold tracking-[-0.01em]">
        {title}
        <ArrowUpRight aria-hidden="true" size={16} className="text-zinc-500" />
      </span>
      <span className="text-[15px] text-zinc-700">{description}</span>
    </a>
  )
}

function MeAnswer({ dict }: { dict: Dict }) {
  const { me } = dict.answers
  const rows = WORK_EXPERIENCE.filter(
    (job) => job.id === 'work2' || job.id === 'work1',
  )
  return (
    <>
      <Lead>{me.text}</Lead>
      <motion.p variants={rise} className="max-w-[60ch] text-zinc-700">
        {me.stack}
      </motion.p>
      <motion.ul
        variants={stagger(0, 0.06)}
        className="flex flex-col gap-3 sm:flex-row"
      >
        {rows.map((job) => (
          <motion.li key={job.id} variants={rise} className="flex-1">
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${card} h-full`}
            >
              <span className={mono}>
                {job.start} - {job.end === 'Present' ? me.present : job.end}
              </span>
              <span className="text-lg font-semibold tracking-[-0.01em]">
                {job.company}
              </span>
              <span className="text-[15px] text-zinc-700">
                {job.id === 'work2' ? me.roles.work2 : me.roles.work1}
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

function HighlightsAnswer({ dict }: { dict: Dict }) {
  const { highlights } = dict.answers
  return (
    <>
      <Lead>{highlights.text}</Lead>
      <motion.ul
        variants={stagger(0, 0.08)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {highlights.items.map((item) => (
          <motion.li
            key={item.title}
            variants={rise}
            className="flex flex-col gap-3 rounded-[20px] border border-zinc-200 bg-white p-5"
          >
            <span className={mono}>{item.kicker}</span>
            <h3 className="text-[22px] leading-tight font-semibold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="text-[15px] text-zinc-700">{item.body}</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[15px] text-zinc-800">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

function ProjectsAnswer({ dict }: { dict: Dict }) {
  return (
    <>
      <Lead>{dict.answers.projects.text}</Lead>
      <motion.ul
        variants={stagger(0, 0.06)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {PROJECT_IDS.map((id) => (
          <motion.li key={id} variants={rise}>
            <ProjectCard id={id} dict={dict} variant="media" />
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

function OpenSourceAnswer({ dict }: { dict: Dict }) {
  const { text, descriptions } = dict.answers['open-source']
  return (
    <>
      <Lead>{text}</Lead>
      <motion.ul
        variants={stagger(0, 0.06)}
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {OPEN_SOURCE.map((tool) => (
          <motion.li key={tool.id} variants={rise}>
            <ExternalRow
              href={tool.link}
              title={tool.name}
              description={descriptions?.[tool.id] ?? tool.description}
            />
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

function WritingAnswer({ dict }: { dict: Dict }) {
  const { text, englishTag } = dict.answers.writing
  return (
    <>
      <Lead>{text}</Lead>
      <motion.ul variants={stagger(0, 0.06)} className="flex flex-col gap-3">
        {BLOG_POSTS.map((post) => (
          <motion.li key={post.uid} variants={rise}>
            <Link href={post.link} className={card} lang="en">
              <span className="text-lg font-semibold tracking-[-0.01em]">
                {post.title}
              </span>
              <span className="text-[15px] text-zinc-700">
                {post.description}
              </span>
              {englishTag && (
                <span
                  lang={dict.htmlLang}
                  className="mt-1 w-fit rounded-full border border-zinc-300 px-2.5 py-0.5 text-xs text-zinc-700"
                >
                  {englishTag}
                </span>
              )}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </>
  )
}

function ContactAnswer({ dict }: { dict: Dict }) {
  const { text, emailLabel, hiring } = dict.answers.contact
  return (
    <>
      <Lead>{text}</Lead>
      <motion.div
        variants={rise}
        className="flex flex-col gap-1 rounded-[20px] border border-zinc-200 p-5"
      >
        <span className={mono}>{emailLabel}</span>
        <a
          href={`mailto:${EMAIL}`}
          className={`w-fit py-2 text-xl font-medium text-blue-700 underline-offset-4 hover:underline ${focusRing}`}
        >
          {EMAIL}
        </a>
        <span className="text-[15px] text-zinc-700">{hiring}</span>
      </motion.div>
      <motion.ul variants={rise} className="flex flex-wrap gap-2.5">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={chip}
            >
              {link.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </>
  )
}

export function TopicChips({
  dict,
  topics,
  label,
  onPick,
  asQuestions,
}: {
  dict: Dict
  topics: readonly TopicId[]
  label: string
  onPick: (topic: TopicId) => void
  asQuestions: boolean
}) {
  return (
    <motion.nav
      variants={rise}
      aria-label={label}
      className="flex flex-wrap gap-2.5"
    >
      {topics.map((topic) => (
        <button
          key={topic}
          type="button"
          className={chip}
          onClick={() => onPick(topic)}
        >
          {asQuestions
            ? dict.topics[topic].question
            : dict.topics[topic].label}
        </button>
      ))}
    </motion.nav>
  )
}

export function Answer({
  topic,
  dict,
  onPick,
  isLast,
}: {
  topic: TopicId | null
  dict: Dict
  onPick: (topic: TopicId) => void
  isLast: boolean
}) {
  if (topic === null) {
    return (
      <>
        <Lead>{dict.fallback.text}</Lead>
        {isLast && (
          <TopicChips
            dict={dict}
            topics={TOPIC_IDS}
            label={dict.hero.topicsLabel}
            onPick={onPick}
            asQuestions={false}
          />
        )}
      </>
    )
  }

  const others = TOPIC_IDS.filter((id) => id !== topic).slice(0, 3)
  return (
    <>
      {topic === 'me' && <MeAnswer dict={dict} />}
      {topic === 'highlights' && <HighlightsAnswer dict={dict} />}
      {topic === 'projects' && <ProjectsAnswer dict={dict} />}
      {topic === 'open-source' && <OpenSourceAnswer dict={dict} />}
      {topic === 'writing' && <WritingAnswer dict={dict} />}
      {topic === 'contact' && <ContactAnswer dict={dict} />}
      {isLast && (
        <TopicChips
          dict={dict}
          topics={others}
          label={dict.followUpsLabel}
          onPick={onPick}
          asQuestions
        />
      )}
    </>
  )
}
