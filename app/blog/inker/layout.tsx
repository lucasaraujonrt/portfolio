import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building Inker: a SaaS for tattoo artists, end to end | Lucas Araujo',
  description:
    'What Inker is today and how it is built: the Expo app, the NestJS API, billing across three stores, the Kitsune agent, and the tools that let one person run it.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
