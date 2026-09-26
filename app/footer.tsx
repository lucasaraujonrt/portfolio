import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4">
      <TextLoop className="text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} Lucas Araujo</span>
        <span>Campinas, SP</span>
      </TextLoop>
    </footer>
  )
}
