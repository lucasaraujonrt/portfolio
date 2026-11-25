import { ArrowUpRight } from 'lucide-react'
import type { Dict, ProjectId } from '@/lib/i18n'
import { ProjectMedia } from './project-media'
import { card, mono } from './styles'

const HREF: Record<ProjectId, string> = {
  inker: 'https://inker.me/',
  jarvis: 'https://sayjarvis.dev/',
  telao: 'https://github.com/lucasaraujonrt/telao',
  nomad: 'https://www.nomadglobal.com/nomad-explorer-infinite',
}

type ProjectCardProps = {
  id: ProjectId
  dict: Dict
  variant: 'compact' | 'media'
}

export function ProjectCard({ id, dict, variant }: ProjectCardProps) {
  const copy = dict.projects[id]
  return (
    <a
      href={HREF[id]}
      target="_blank"
      rel="noopener noreferrer"
      className={`${card} ${variant === 'media' ? 'gap-3' : ''} h-full`}
    >
      {variant === 'media' && (
        <ProjectMedia id={id} title={copy.title} media={dict.projectMedia} />
      )}
      <span className={mono}>{copy.kicker}</span>
      <span className="flex items-center gap-1.5 text-[22px] font-semibold tracking-[-0.02em]">
        {copy.title}
        <ArrowUpRight aria-hidden="true" size={18} className="text-zinc-500" />
      </span>
      <span className="text-[15px] text-zinc-700">
        {variant === 'media' ? copy.long : copy.short}
      </span>
    </a>
  )
}
