'use client'
import { motion, type MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

type AvatarProps = {
  alt: string
  src?: string
  className?: string
  layoutId?: string
  rotateX?: MotionValue<number>
  rotateY?: MotionValue<number>
}

export function Avatar({
  alt,
  src,
  className,
  layoutId,
  rotateX,
  rotateY,
}: AvatarProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={cn(
        'shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 [container-type:inline-size]',
        className,
      )}
      style={{ transformPerspective: 700, rotateX, rotateY }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="size-full object-cover" />
      ) : (
        <span
          role="img"
          aria-label={alt}
          className="flex size-full select-none items-center justify-center font-semibold tracking-tight text-neutral-950 text-[38cqw]"
        >
          LA
        </span>
      )}
    </motion.div>
  )
}
