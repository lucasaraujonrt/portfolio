import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLOG_POSTS, type BlogPost } from '@/app/data'
import { focusRing, mono } from '@/components/home/styles'

type Locale = 'en' | 'pt'

const COPY = {
  en: {
    title: 'Writing',
    intro:
      'Notes on things I have built: React Native and Swift, backends, and coding agents.',
    count: (total: number) => `${total} posts so far.`,
    latest: 'Latest',
    post: 'Post',
    language: 'English',
    other: 'Ler em português',
    otherLang: 'pt-BR',
    dateLocale: 'en-US',
  },
  pt: {
    title: 'Textos',
    intro:
      'Notas sobre o que eu construí: React Native e Swift, backend e agentes de código.',
    count: (total: number) => `${total} textos até agora.`,
    latest: 'Mais recente',
    post: 'Texto',
    language: 'Português',
    other: 'Read in English',
    otherLang: 'en',
    dateLocale: 'pt-BR',
  },
} as const

const tagBase =
  'inline-flex items-center rounded-full border border-zinc-300 text-xs font-medium text-zinc-700'
const tag = `${tagBase} min-h-7 px-2.5`
const tagLink = `${tagBase} relative z-10 min-h-11 px-3.5 transition-colors duration-150 hover:border-zinc-500 hover:bg-zinc-50 ${focusRing}`

function formatDate(date: string, dateLocale: string) {
  return new Intl.DateTimeFormat(dateLocale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function PostCard({
  post,
  locale,
  index,
  featured,
}: {
  post: BlogPost
  locale: Locale
  index: number
  featured: boolean
}) {
  const copy = COPY[locale]
  const translated = locale === 'pt' && post.pt !== undefined
  const inPortuguese = translated ? post.pt : undefined
  const title = inPortuguese?.title ?? post.title
  const description = inPortuguese?.description ?? post.description
  const href = inPortuguese ? `/pt${post.link}` : post.link
  const otherHref =
    locale === 'pt'
      ? inPortuguese
        ? post.link
        : undefined
      : post.pt
        ? `/pt${post.link}`
        : undefined
  const kicker = featured ? copy.latest : copy.post

  return (
    <li
      style={{ '--rise-i': index + 2 } as React.CSSProperties}
      lang={locale === 'pt' && !inPortuguese ? 'en' : undefined}
      className={`rise-in group relative flex flex-col gap-3 rounded-[20px] border border-zinc-200 bg-white p-6 transition-[translate,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-within:border-zinc-400 hover:border-zinc-400 motion-safe:hover:-translate-y-0.5 ${
        featured ? 'md:col-span-2 md:p-8' : ''
      }`}
    >
      <span className={mono}>
        {kicker}
        {post.date && (
          <>
            {' · '}
            <time dateTime={post.date}>
              {formatDate(post.date, copy.dateLocale)}
            </time>
          </>
        )}
      </span>
      <h2
        className={`font-semibold tracking-[-0.02em] text-balance ${
          featured
            ? 'text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.1]'
            : 'text-[22px] leading-tight'
        }`}
      >
        <Link
          href={href}
          className={`rounded-sm after:absolute after:inset-0 after:rounded-[20px] ${focusRing}`}
        >
          {title}
        </Link>
        <ArrowUpRight
          aria-hidden="true"
          size={featured ? 22 : 18}
          className="ml-1.5 inline-block align-baseline text-zinc-400 transition-colors duration-200 group-hover:text-blue-700"
        />
      </h2>
      <p
        className={`text-zinc-700 ${featured ? 'max-w-[62ch] text-[17px]' : 'text-[15px]'}`}
      >
        {description}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <span className={tag}>
          {locale === 'pt' && !inPortuguese ? 'English' : copy.language}
        </span>
        {otherHref && (
          <Link href={otherHref} lang={copy.otherLang} className={tagLink}>
            {copy.other}
          </Link>
        )}
      </div>
    </li>
  )
}

export function PostList({ locale }: { locale: Locale }) {
  const copy = COPY[locale]
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-4 sm:pt-8">
        <h1 className="rise-in text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.04em]">
          {copy.title}
        </h1>
        <p
          style={{ '--rise-i': 1 } as React.CSSProperties}
          className="rise-in max-w-[56ch] text-lg text-zinc-700"
        >
          {copy.intro} {copy.count(BLOG_POSTS.length)}
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <PostCard
            key={post.uid}
            post={post}
            locale={locale}
            index={index}
            featured={index === 0}
          />
        ))}
      </ul>
    </div>
  )
}
