import type { Metadata } from 'next'
import { Home } from '@/components/home/home'
import { getDict } from '@/lib/i18n'

const dict = getDict('en')

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
  alternates: {
    canonical: '/en',
    languages: { 'pt-BR': '/', en: '/en', 'x-default': '/' },
  },
}

export default function Page() {
  return <Home locale="en" />
}
