import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instagram Reels as React components: the narration drives the timeline | Lucas Araujo',
  description:
    'Building an 18-second product reel in Remotion: beats sized by the narration, a small motion vocabulary, impact effects and sound effects placed by frame.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
