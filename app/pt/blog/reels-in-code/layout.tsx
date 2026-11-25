import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reels do Instagram como componentes React: a narração manda no tempo | Lucas Araujo',
  description:
    'Como montar um reel de produto de 18 segundos no Remotion: trechos com a duração da narração, um vocabulário pequeno de movimento, efeitos de impacto e sons posicionados por frame.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
