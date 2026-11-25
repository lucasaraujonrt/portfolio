export const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700'

export const easeOut = 'ease-[cubic-bezier(0.23,1,0.32,1)]'

export const chip = `inline-flex min-h-11 items-center rounded-[14px] border border-zinc-300 bg-white px-5 text-[15px] font-medium text-neutral-950 transition-[scale,border-color,background-color] duration-150 ${easeOut} hover:border-zinc-500 hover:bg-zinc-50 active:scale-[0.97] ${focusRing}`

export const card = `flex flex-col gap-2 rounded-[20px] border border-zinc-200 bg-white p-5 text-neutral-950 no-underline transition-[translate,border-color] duration-200 ${easeOut} hover:border-zinc-400 motion-safe:hover:-translate-y-0.5 ${focusRing}`

export const mono =
  'font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-normal text-zinc-600'
