import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Live Activity e App Intents num app Expo, sem ejetar | Lucas Araujo',
  description:
    'Uma Live Activity na tela de bloqueio, com botões que funcionam, num app Expo: a ponte pelo runtime do Objective-C, uma chamada idempotente e a data de expiração como relógio.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
