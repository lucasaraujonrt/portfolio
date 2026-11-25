'use client'
import { useEffect, useRef } from 'react'
import type { Dict, ProjectId } from '@/lib/i18n'
import { mono } from './styles'

const FRAME =
  'aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-zinc-200 bg-zinc-100'

const PORTRAIT_FRAME =
  'relative aspect-[4/5] w-full overflow-hidden rounded-[14px] border border-zinc-200 bg-zinc-100 md:aspect-square'

type Video = { src: string; poster?: string; portrait?: boolean }

const VIDEOS: Partial<Record<ProjectId, Video>> = {
  inker: { src: '/inker.mp4', poster: '/inker-poster.jpg', portrait: true },
  nomad: {
    src: '/nomad-explorer.mp4',
    poster: '/nomad-explorer-poster.jpg',
    portrait: true,
  },
  jarvis: { src: '/jarvis-demo.mp4', poster: '/jarvis-poster.jpg' },
  telao: { src: '/telao-demo.mp4' },
}

function TypographicFrame({ title, line }: { title: string; line: string }) {
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
  const video = VIDEOS[id]

  useEffect(() => {
    const video = videoRef.current
    const link = rootRef.current?.closest('a')
    if (!video || !link) return
    const play = () => void video.play().catch(() => undefined)
    const stop = () => {
      video.pause()
      if (video.poster) video.load()
      else video.currentTime = 0.1
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
  if (video?.portrait && video.poster) {
    content = (
      <div className={PORTRAIT_FRAME}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full scale-125 object-cover opacity-70 blur-2xl"
        />
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className="relative mx-auto h-full w-auto"
        />
      </div>
    )
  } else if (video) {
    content = (
      <div className={FRAME}>
        <video
          ref={videoRef}
          src={video.poster ? video.src : `${video.src}#t=0.1`}
          poster={video.poster}
          muted
          loop
          playsInline
          preload={video.poster ? 'none' : 'metadata'}
          aria-hidden="true"
          tabIndex={-1}
          className="size-full object-cover"
        />
      </div>
    )
  } else {
    content = <TypographicFrame title={title} line={media.jarvis} />
  }

  return <div ref={rootRef}>{content}</div>
}
