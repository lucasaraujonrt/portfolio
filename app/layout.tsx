import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { WEBSITE_URL } from '@/lib/constants'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: 'Lucas Araujo',
  description:
    'Software engineer and founder of Inker, previously at Nomad. Open-source tools for coding agents.',
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white text-zinc-900 tracking-tight antialiased`}
      >
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
