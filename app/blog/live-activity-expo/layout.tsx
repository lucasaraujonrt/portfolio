import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Live Activities and App Intents in an Expo app, without ejecting | Lucas Araujo',
  description:
    'A lock-screen Live Activity with working buttons in an Expo app: the Objective-C runtime bridge, one idempotent reconcile call, and the stale date as the clock.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
