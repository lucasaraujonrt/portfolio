'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, Check, Link2 } from 'lucide-react'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { focusRing } from '@/components/home/styles'
import { Header } from '../header'
import { Footer } from '../footer'

const pill = `inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 text-[15px] font-medium text-neutral-950 transition-[scale,border-color,background-color] duration-150 hover:border-zinc-500 hover:bg-zinc-50 active:scale-[0.97] ${focusRing}`

function CopyButton({ portuguese }: { portuguese: boolean }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const idle = portuguese ? 'Copiar link' : 'Copy link'
  const done = portuguese ? 'Copiado' : 'Copied'

  return (
    <button
      type="button"
      className={pill}
      onClick={() => {
        void navigator.clipboard
          .writeText(window.location.href)
          .then(() => setCopied(true))
      }}
    >
      {copied ? (
        <Check aria-hidden="true" size={16} />
      ) : (
        <Link2 aria-hidden="true" size={16} />
      )}
      <span aria-live="polite">{copied ? done : idle}</span>
    </button>
  )
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const portuguese = pathname.startsWith('/pt/')
  const blogHome = portuguese ? '/pt/blog' : '/blog'
  const isIndex = pathname === blogHome

  return (
    <div
      lang={portuguese ? undefined : 'en'}
      className="mx-auto flex min-h-dvh w-full max-w-[1040px] flex-col gap-10 px-5 pb-16 font-[family-name:var(--font-geist)] text-neutral-950"
    >
      {!isIndex && (
        <ScrollProgress
          className="fixed top-0 left-0 z-20 h-0.5 bg-blue-700"
          springOptions={{ bounce: 0 }}
        />
      )}
      <Header portuguese={portuguese} />

      {isIndex ? (
        <main className="flex-1">{children}</main>
      ) : (
        <main className="mx-auto w-full max-w-[680px] flex-1">
          <div className="rise-in mb-10 flex flex-wrap items-center justify-between gap-3">
            <Link href={blogHome} className={pill}>
              <ArrowLeft aria-hidden="true" size={16} />
              {portuguese ? 'Todos os textos' : 'All posts'}
            </Link>
            <CopyButton portuguese={portuguese} />
          </div>
          <article
            style={{ '--rise-i': 1 } as React.CSSProperties}
            className="rise-in prose prose-zinc prose-headings:tracking-[-0.02em] prose-h1:mb-6 prose-h1:text-[clamp(1.875rem,4.4vw,2.75rem)] prose-h1:leading-[1.08] prose-h1:font-semibold prose-h1:tracking-[-0.035em] prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-semibold prose-p:text-[17px] prose-p:leading-[1.7] prose-a:text-blue-700 prose-a:underline-offset-4 prose-strong:font-semibold prose-li:text-[17px] prose-img:rounded-2xl max-w-none"
          >
            {children}
          </article>
        </main>
      )}

      <Footer portuguese={portuguese} />
    </div>
  )
}
