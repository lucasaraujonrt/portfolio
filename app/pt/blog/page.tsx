import type { Metadata } from 'next'
import { PostList } from '@/components/blog/post-list'

export const metadata: Metadata = {
  title: 'Textos | Lucas Araujo',
  description:
    'Notas sobre o que eu construí: React Native e Swift, backend e agentes de código.',
  alternates: {
    canonical: '/pt/blog',
    languages: { en: '/blog', 'pt-BR': '/pt/blog' },
  },
}

export default function BlogPagePt() {
  return <PostList locale="pt" />
}
