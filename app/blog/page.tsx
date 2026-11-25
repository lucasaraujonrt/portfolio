import type { Metadata } from 'next'
import { PostList } from '@/components/blog/post-list'

export const metadata: Metadata = {
  title: 'Blog | Lucas Araujo',
  description:
    'Notes on things I have built: React Native and Swift, backends, and coding agents.',
  alternates: {
    canonical: '/blog',
    languages: { en: '/blog', 'pt-BR': '/pt/blog' },
  },
}

export default function BlogPage() {
  return <PostList locale="en" />
}
