import { OPEN_SOURCE, SOCIAL_LINKS } from '@/app/data'
import { PROJECT_IDS, type Dict } from '@/lib/i18n'
import { ProjectCard } from './project-card'
import { focusRing } from './styles'

const linkClass = `inline-flex min-h-11 items-center font-medium text-blue-700 underline-offset-4 hover:underline ${focusRing}`

export function ShortVersion({ dict }: { dict: Dict }) {
  const github = SOCIAL_LINKS.find((link) => link.label === 'Github')
  const linkedin = SOCIAL_LINKS.find((link) => link.label === 'LinkedIn')
  return (
    <section
      id="skim"
      aria-labelledby="skim-title"
      className="flex scroll-mt-6 flex-col gap-5"
    >
      <h2
        id="skim-title"
        className="text-[clamp(1.5rem,3vw,2.125rem)] font-semibold tracking-[-0.03em]"
      >
        {dict.short.title}
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECT_IDS.map((id) => (
          <li key={id}>
            <ProjectCard id={id} dict={dict} variant="compact" />
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap gap-x-7 gap-y-1 text-base">
        <li>
          <a href="#open-source" className={linkClass}>
            {dict.short.openSource.replace(
              '{count}',
              String(OPEN_SOURCE.length),
            )}
          </a>
        </li>
        <li>
          <a href="#writing" className={linkClass}>
            {dict.short.writing}
          </a>
        </li>
        {github && (
          <li>
            <a href={github.link} className={linkClass}>
              {dict.short.github}
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin.link} className={linkClass}>
              {dict.short.linkedin}
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}
