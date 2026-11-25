import { EMAIL } from '@/app/data'
import type { Dict } from '@/lib/i18n'
import { focusRing } from './styles'

export function HomeFooter({ dict }: { dict: Dict }) {
  return (
    <footer
      id="hire"
      className="flex flex-wrap items-end justify-between gap-5 border-t border-zinc-200 pt-10"
    >
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[clamp(1.625rem,3.6vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
          {dict.footer.heading}
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className={`inline-flex min-h-11 items-center text-lg font-medium text-blue-700 underline-offset-4 hover:underline ${focusRing}`}
        >
          {EMAIL}
        </a>
      </div>
      <p className="text-sm text-zinc-600">
        © {new Date().getFullYear()} {dict.footer.rights}
      </p>
    </footer>
  )
}
