import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aprovação humana para agentes de IA: um link de uso único e um PIN | Lucas Araujo',
  description:
    'Um fluxo de aprovação para ações de agentes de IA: link de uso único, PIN de 6 dígitos, bloqueios e um contador de tentativas seguro contra corrida, agora open source no agent-action-gate.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
