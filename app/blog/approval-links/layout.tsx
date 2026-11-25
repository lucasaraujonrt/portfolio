import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human approval for AI agents: a one-time link and a PIN | Lucas Araujo',
  description:
    'An approval flow for AI agent actions: a one-time link, a 6-digit PIN, lockouts, and a race-safe attempt counter, now open source in agent-action-gate.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
