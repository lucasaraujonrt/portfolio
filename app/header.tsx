import Link from 'next/link'
import { focusRing } from '@/components/home/styles'

const navLink = `inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-neutral-950 ${focusRing}`

export function Header({ portuguese = false }: { portuguese?: boolean }) {
  const home = portuguese ? '/' : '/en'
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 pt-5">
      <Link
        href={home}
        className={`flex items-center gap-3 rounded-full py-1 pr-3 ${focusRing}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar-smile.png"
          alt=""
          aria-hidden="true"
          className="size-11 rounded-full border border-zinc-200 bg-zinc-100 object-cover"
        />
        <span className="text-base font-semibold">Lucas Araujo</span>
      </Link>
      <nav
        aria-label={portuguese ? 'Navegação' : 'Navigation'}
        className="flex items-center gap-1"
      >
        <Link href={home} className={navLink}>
          {portuguese ? 'Início' : 'Home'}
        </Link>
        <Link href="/blog" className={navLink}>
          Blog
        </Link>
      </nav>
    </header>
  )
}
