'use client'
import { useEffect, useRef } from 'react'
import type { Dict, ProjectId } from '@/lib/i18n'
import { mono } from './styles'

const FRAME =
  'aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-zinc-200 bg-zinc-100'

const VIDEOS: Partial<Record<ProjectId, string>> = {
  inker: '/inker.mp4',
  nomad: '/nomad-explorer.mp4',
  telao: '/telao-demo.mp4',
}

function TypographicFrame({
  title,
  line,
}: {
  title: string
  line: string
}) {
  return (
    <div
      className={`${FRAME} flex flex-col items-center justify-center gap-2 bg-zinc-50`}
    >
      <span className="text-3xl font-semibold tracking-tight text-neutral-950">
        {title}
      </span>
      <span className={mono}>{line}</span>
    </div>
  )
}

export function ProjectMedia({
  id,
  title,
  media,
}: {
  id: ProjectId
  title: string
  media: Dict['projectMedia']
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const src = VIDEOS[id]

  useEffect(() => {
    const video = videoRef.current
    const link = rootRef.current?.closest('a')
    if (!video || !link) return
    const play = () => void video.play().catch(() => undefined)
    const stop = () => {
      video.pause()
      video.currentTime = 0.1
    }
    link.addEventListener('pointerenter', play)
    link.addEventListener('focus', play)
    link.addEventListener('pointerleave', stop)
    link.addEventListener('blur', stop)
    return () => {
      link.removeEventListener('pointerenter', play)
      link.removeEventListener('focus', play)
      link.removeEventListener('pointerleave', stop)
      link.removeEventListener('blur', stop)
    }
  }, [])

  let content: React.ReactNode
  if (src) {
    content = (
      <div className={FRAME}>
        <video
          ref={videoRef}
          src={`${src}#t=0.1`}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          className="size-full object-contain"
        />
      </div>
    )
  } else {
    content = <TypographicFrame title={title} line={media.jarvis} />
  }

  return <div ref={rootRef}>{content}</div>
}
