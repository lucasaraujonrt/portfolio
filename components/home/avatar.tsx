'use client'
import { motion, type MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'

type AvatarProps = {
  alt: string
  src?: string
  /** Shown instead of `src` while the pointer is over the avatar. */
  hoverSrc?: string
  className?: string
  layoutId?: string
  rotateX?: MotionValue<number>
  rotateY?: MotionValue<number>
}

export function Avatar({
  alt,
  src,
  hoverSrc,
  className,
  layoutId,
  rotateX,
  rotateY,
}: AvatarProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={cn(
        'group relative shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 [container-type:inline-size]',
        className,
      )}
      style={{ transformPerspective: 700, rotateX, rotateY }}
    >
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            draggable={false}
            className={cn(
              'size-full object-cover select-none',
              hoverSrc && 'group-hover:opacity-0',
            )}
          />
          {hoverSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hoverSrc}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 size-full object-cover opacity-0 select-none group-hover:opacity-100"
            />
          )}
        </>
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
