import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BLOG_POSTS } from '../data'
import { PT_BLOG_LINKS } from '@/lib/i18n'
import { focusRing, mono } from '@/components/home/styles'

export const metadata: Metadata = {
  title: 'Blog | Lucas Araujo',
  description:
    'Notes on things I have built: React Native and Swift, backends, and coding agents.',
}

const tagBase =
  'inline-flex items-center rounded-full border border-zinc-300 text-xs font-medium text-zinc-700'
const tag = `${tagBase} min-h-7 px-2.5`
const tagLink = `${tagBase} relative z-10 min-h-11 px-3.5 transition-colors duration-150 hover:border-zinc-500 hover:bg-zinc-50 ${focusRing}`

type Post = (typeof BLOG_POSTS)[number]

function PostCard({
  post,
  index,
  featured = false,
}: {
  post: Post
  index: number
  featured?: boolean
}) {
  const hasPortuguese = PT_BLOG_LINKS.includes(post.link)
  return (
    <li
      style={{ '--rise-i': index + 2 } as React.CSSProperties}
      className={`rise-in group relative flex flex-col gap-3 rounded-[20px] border border-zinc-200 bg-white p-6 transition-[translate,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] focus-within:border-zinc-400 hover:border-zinc-400 motion-safe:hover:-translate-y-0.5 ${
        featured ? 'md:col-span-2 md:p-8' : ''
      }`}
    >
      <span className={mono}>{featured ? 'Latest' : 'Post'}</span>
      <h2
        className={`font-semibold tracking-[-0.02em] text-balance ${
          featured
            ? 'text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.1]'
            : 'text-[22px] leading-tight'
        }`}
      >
        <Link
          href={post.link}
          className={`rounded-sm after:absolute after:inset-0 after:rounded-[20px] ${focusRing}`}
        >
          {post.title}
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
        {post.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        <span className={tag}>English</span>
        {hasPortuguese && (
          <Link href={`/pt${post.link}`} lang="pt-BR" className={tagLink}>
            Ler em português
          </Link>
        )}
      </div>
    </li>
  )
}

export default function BlogPage() {
  const [latest, ...rest] = BLOG_POSTS
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 pt-4 sm:pt-8">
        <h1 className="rise-in text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] font-bold tracking-[-0.04em]">
          Writing
        </h1>
        <p
          style={{ '--rise-i': 1 } as React.CSSProperties}
          className="rise-in max-w-[56ch] text-lg text-zinc-700"
        >
          Notes on things I have built: React Native and Swift, backends, and
          coding agents. {BLOG_POSTS.length} posts so far.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {latest && <PostCard post={latest} index={0} featured />}
        {rest.map((post, index) => (
          <PostCard key={post.uid} post={post} index={index + 1} />
        ))}
      </ul>
    </div>
  )
}
