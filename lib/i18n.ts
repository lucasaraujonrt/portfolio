export type Locale = 'pt' | 'en'

export const TOPIC_IDS = [
  'me',
  'highlights',
  'projects',
  'open-source',
  'writing',
  'contact',
] as const

export type TopicId = (typeof TOPIC_IDS)[number]

export const PROJECT_IDS = ['inker', 'nomad', 'jarvis', 'telao'] as const

export type ProjectId = (typeof PROJECT_IDS)[number]

type ProjectCopy = {
  kicker: string
  title: string
  short: string
  long: string
}

type Answer = {
  text: string
}

export type Dict = {
  locale: Locale
  htmlLang: string
  path: string
  meta: { title: string; description: string }
  header: {
    name: string
    skim: string
    back: string
    languageLabel: string
  }
  hero: {
    greeting: string
    headline: string
    label: string
    followUpLabel: string
    placeholders: readonly [string, string, string]
    send: string
    topicsLabel: string
  }
  avatarAlt: string
  topics: Record<TopicId, { label: string; question: string }>
  answers: {
    me: Answer & {
      stack: string
      roles: { work2: string; work1: string }
      present: string
    }
    highlights: Answer & {
      items: readonly {
        kicker: string
        title: string
        body: string
        points: readonly string[]
      }[]
    }
    projects: Answer
    'open-source': Answer & {
      descriptions: Record<string, string> | null
    }
    writing: Answer & {
      englishTag: string | null
      portugueseTag: string | null
    }
    contact: Answer & { emailLabel: string; hiring: string }
  }
  fallback: { text: string }
  followUpsLabel: string
  projects: Record<ProjectId, ProjectCopy>
  projectMedia: { jarvis: string; telao: string; telaoAlt: string }
  short: {
    title: string
    openSource: string
    writing: string
    github: string
    linkedin: string
  }
  footer: { heading: string; rights: string }
}

const en: Dict = {
  locale: 'en',
  htmlLang: 'en',
  path: '/en',
  meta: {
    title: 'Lucas Araujo',
    description:
      'Software engineer and founder of Inker, previously at Nomad. Open-source tools for coding agents.',
  },
  header: {
    name: 'Lucas Araujo',
    skim: 'Skim the page',
    back: 'Back to the start',
    languageLabel: 'Language',
  },
  hero: {
    greeting: "Hey, I'm Lucas",
    headline: 'Apps, backends and agents.',
    label: 'Ask about my work, or pick a topic',
    followUpLabel: 'Ask a follow-up',
    placeholders: [
      'What did you build at Inker?',
      'How do you work with agents?',
      "What's your stack?",
    ],
    send: 'Send question',
    topicsLabel: 'Topics',
  },
  avatarAlt: 'Lucas Araujo',
  topics: {
    me: { label: 'Me', question: 'Who are you?' },
    highlights: {
      label: 'Highlights',
      question: 'What are you most proud of?',
    },
    projects: { label: 'Projects', question: 'What have you built?' },
    'open-source': {
      label: 'Open source',
      question: 'What have you open-sourced?',
    },
    writing: { label: 'Writing', question: 'What have you written?' },
    contact: { label: 'Contact', question: 'How can I reach you?' },
  },
  answers: {
    me: {
      text: "I'm Lucas, a software engineer in Campinas, Brazil, with about six years shipping mobile and web products in TypeScript. In 2025 I founded Inker, a SaaS for tattoo artists that I built end to end: it has 800 users and has processed more than 3,000 quotes. From 2024 to 2026 I worked at Nomad, a global-account fintech, where I led the build of the credit card inside the mobile app, including Apple Wallet and Google Wallet. I'm open to remote roles worldwide.",
      stack:
        'My stack: TypeScript, React Native with Expo, Next.js, NestJS and PostgreSQL, plus Swift for native iOS. For AI, the Vercel AI SDK with OpenAI, Gemini and Anthropic models.',
      roles: { work2: 'Founder', work1: 'Software Engineer' },
      present: 'Present',
    },
    highlights: {
      text: "Two things: I built Inker from scratch on my own, and I built Nomad's credit card from zero.",
      items: [
        {
          kicker: 'Inker · 2025 to present',
          title: 'Building Inker from scratch, on my own',
          body: 'I founded Inker in February 2025 as a WhatsApp-first SaaS for tattoo artists in Brazil, a market where most professionals still run quotes, scheduling and payments by hand in chat. I own everything: the product decisions, the mobile app, the web, the backend and the AI that runs in production, plus the marketing posts, the support tickets and the conversations with users about what to build next. It taught me to treat engineering as one part of making a product work for real people and for the business.',
          points: [
            '800 users and more than 3,000 quotes generated',
            'Subscription billing across the App Store, Google Play and the web',
            'Infrastructure migrated from Railway to AWS',
            'A suite of 3,259 automated tests',
          ],
        },
        {
          kicker: 'Nomad · 2024 to 2026',
          title: "Building Nomad's credit card from zero",
          body: 'When I joined Nomad in 2024 there was no card yet. I came in to build it and ended up leading the mobile side of the project, working on almost every part of it for two and a half years. This project shaped the engineer I am today.',
          points: [
            'Card data and partner integration under PCI compliance',
            'Statements, limits, virtual card, card blocking, installments and disputes',
            'Apple Wallet Extension, delivered under a deadline set by Apple',
            'Launch of the Platinum card',
          ],
        },
      ],
    },
    projects: {
      text: "Four things I'd show first. Inker is the big one: I founded it and work on the app, the web and the API. Jarvis and Telão are open-source projects. Nomad Explorer is from my last job.",
    },
    'open-source': {
      text: 'Small tools for working with coding agents: approvals, media jobs with a spend cap, Meta Ads access, a task board, and a way to list assumptions before coding. Jarvis and Telão are open source too.',
      descriptions: null,
    },
    writing: {
      text: 'I write about things I have built. These are the posts so far.',
      englishTag: null,
      portugueseTag: null,
    },
    contact: {
      text: 'Email is the fastest way. I am also on GitHub and LinkedIn.',
      emailLabel: 'Email',
      hiring: "Hiring? Let's talk.",
    },
  },
  fallback: {
    text: 'I can answer these. Pick one, or ask with a word like stack, agents, Inker or contact.',
  },
  followUpsLabel: 'Follow-up questions',
  projects: {
    inker: {
      kicker: 'Founder · 2025 to present',
      title: 'Inker',
      short:
        'Platform for tattoo artists: Expo app, Next.js web, NestJS API, and Kitsune, the studio assistant.',
      long: 'SaaS for tattoo artists, built end to end: 800 users and more than 3,000 quotes processed. Expo app on iOS and Android with native Swift widgets and a Live Activity, Next.js web, NestJS API, and Kitsune, a production AI agent with tool calling, a WhatsApp inbox and photo-to-stencil generation.',
    },
    jarvis: {
      kicker: 'Open-source prototype',
      title: 'Jarvis',
      short:
        'Speak a request into Meta glasses and a coding agent on your Mac does the work. You approve on the iPhone.',
      long: 'Speak a request into Meta glasses and a coding agent on your Mac (Codex, Claude Code or Grok Code) does the work. You approve on the iPhone. The code stays on your machine.',
    },
    telao: {
      kicker: 'Open source',
      title: 'Telão',
      short:
        'Peer-to-peer screen sharing for a Discord group: eight people, four live screens, no media server.',
      long: 'Peer-to-peer screen sharing for a Discord friend group. Up to eight people and four live screens over a WebRTC mesh, with no media server and no accounts. Meme sounds, and tomatoes thrown at whoever is live.',
    },
    nomad: {
      kicker: 'Nomad · 2024 to 2026',
      title: 'Nomad Explorer',
      short:
        'Led the build of the credit card inside the Nomad app, from concept to launch.',
      long: 'Led the build of the credit card inside the Nomad app, from concept to launch, with PCI-compliant card flows and Apple Wallet and Google Wallet push provisioning.',
    },
  },
  projectMedia: {
    jarvis: 'Glasses, Mac, iPhone',
    telao: '8 people · 4 screens · WebRTC',
    telaoAlt: 'Telão demo: several shared screens in one call',
  },
  short: {
    title: 'In a hurry? The short version.',
    openSource: '{count} open-source agent tools',
    writing: 'Writing',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: { heading: "Hiring? Let's talk.", rights: 'Lucas Araujo' },
}

const pt: Dict = {
  locale: 'pt',
  htmlLang: 'pt-BR',
  path: '/',
  meta: {
    title: 'Lucas Araujo',
    description:
      'Engenheiro de software e fundador da Inker, antes na Nomad. Ferramentas open source para agentes de código.',
  },
  header: {
    name: 'Lucas Araujo',
    skim: 'Ver a versão curta',
    back: 'Voltar ao início',
    languageLabel: 'Idioma',
  },
  hero: {
    greeting: 'Oi, eu sou o Lucas',
    headline: 'Apps, backends e agentes.',
    label: 'Pergunte sobre meu trabalho ou escolha um tema',
    followUpLabel: 'Faça outra pergunta',
    placeholders: [
      'O que você construiu na Inker?',
      'Como você trabalha com agentes?',
      'Qual é a sua stack?',
    ],
    send: 'Enviar pergunta',
    topicsLabel: 'Temas',
  },
  avatarAlt: 'Lucas Araujo',
  topics: {
    me: { label: 'Sobre mim', question: 'Quem é você?' },
    highlights: {
      label: 'Conquistas',
      question: 'Do que você mais se orgulha?',
    },
    projects: { label: 'Projetos', question: 'O que você já construiu?' },
    'open-source': {
      label: 'Open source',
      question: 'O que você abriu como open source?',
    },
    writing: { label: 'Textos', question: 'O que você já escreveu?' },
    contact: { label: 'Contato', question: 'Como falo com você?' },
  },
  answers: {
    me: {
      text: 'Sou o Lucas, engenheiro de software em Campinas, com uns seis anos entregando produtos mobile e web em TypeScript. Em 2025 fundei a Inker, um SaaS para tatuadores que construí de ponta a ponta: tem 800 usuários e mais de 3.000 orçamentos processados. De 2024 a 2026 trabalhei na Nomad, fintech de conta global, onde liderei a construção do cartão de crédito dentro do app, incluindo Apple Wallet e Google Wallet. Estou aberto a vagas remotas, no Brasil ou fora.',
      stack:
        'Minha stack: TypeScript, React Native com Expo, Next.js, NestJS e PostgreSQL, além de Swift para iOS nativo. Para IA, o Vercel AI SDK com modelos da OpenAI, Gemini e Anthropic.',
      roles: { work2: 'Fundador', work1: 'Engenheiro de software' },
      present: 'hoje',
    },
    highlights: {
      text: 'Duas coisas: construí a Inker do zero, sozinho, e construí o cartão de crédito da Nomad do zero.',
      items: [
        {
          kicker: 'Inker · 2025 até hoje',
          title: 'Construir a Inker do zero, sozinho',
          body: 'Fundei a Inker em fevereiro de 2025 como um SaaS para tatuadores no Brasil que parte do WhatsApp, num mercado em que a maioria ainda faz orçamento, agenda e pagamento na mão, pelo chat. Cuido de tudo: as decisões de produto, o app, a web, o backend e a IA que roda em produção, além dos posts de marketing, do suporte e das conversas com usuários para decidir o que construir. Aprendi a tratar engenharia como uma parte de fazer o produto funcionar para pessoas de verdade e para o negócio.',
          points: [
            '800 usuários e mais de 3.000 orçamentos gerados',
            'Assinatura na App Store, no Google Play e na web',
            'Infraestrutura migrada do Railway para a AWS',
            'Suíte de 3.259 testes automatizados',
          ],
        },
        {
          kicker: 'Nomad · 2024 a 2026',
          title: 'Construir o cartão de crédito da Nomad do zero',
          body: 'Quando entrei na Nomad, em 2024, ainda não existia cartão. Entrei para construir e acabei liderando a parte mobile do projeto, passando por quase tudo nele durante dois anos e meio. Esse projeto moldou o engenheiro que sou hoje.',
          points: [
            'Dados do cartão e integração com o parceiro em conformidade com PCI',
            'Fatura, limites, cartão virtual, bloqueio, parcelamento e contestação',
            'Apple Wallet Extension, entregue no prazo definido pela Apple',
            'Lançamento do cartão Platinum',
          ],
        },
      ],
    },
    projects: {
      text: 'Quatro coisas para começar. A Inker é a principal: fundei e cuido do app, da web e da API. Jarvis e Telão são projetos open source. O Nomad Explorer é do meu último emprego.',
    },
    'open-source': {
      text: 'Ferramentas pequenas para trabalhar com agentes de código: aprovações, jobs de mídia com teto de gasto, acesso ao Meta Ads, um quadro de tarefas e um jeito de listar suposições antes de codar. Jarvis e Telão também são open source.',
      descriptions: {
        'os-1':
          'Aprovação antes de uma ação. Se o resultado de uma API é incerto, ele continua incerto até alguém conferir.',
        'os-2':
          'Jobs na fal.ai com estimativa de custo, teto de gasto e conferência do arquivo que volta.',
        'os-3':
          'Lê Instagram e Meta Ads e prepara mudanças de campanha para uma aprovação separada.',
        'os-4': 'Cria, busca e atualiza tarefas por CLI ou MCP.',
        'os-5':
          'Suposições e perguntas antes de implementar, num documento interativo.',
      },
    },
    writing: {
      text: 'Escrevo sobre o que eu mesmo construí. Estes são os textos até agora.',
      englishTag: 'em inglês',
      portugueseTag: 'em português',
    },
    contact: {
      text: 'O e-mail é o caminho mais rápido. Também estou no GitHub e no LinkedIn.',
      emailLabel: 'E-mail',
      hiring: 'Contratando? Vamos conversar.',
    },
  },
  fallback: {
    text: 'Eu respondo estes temas. Escolha um, ou pergunte com uma palavra como stack, agentes, Inker ou contato.',
  },
  followUpsLabel: 'Outras perguntas',
  projects: {
    inker: {
      kicker: 'Fundador · 2025 até hoje',
      title: 'Inker',
      short:
        'Plataforma para tatuadores: app Expo, web em Next.js, API em NestJS e a Kitsune, a assistente do estúdio.',
      long: 'SaaS para tatuadores, construído de ponta a ponta: 800 usuários e mais de 3.000 orçamentos processados. App Expo para iOS e Android com widgets nativos em Swift e uma Live Activity, web em Next.js, API em NestJS e a Kitsune, um agente de IA em produção que usa ferramentas, atende pelo WhatsApp e transforma foto em decalque.',
    },
    jarvis: {
      kicker: 'Protótipo open source',
      title: 'Jarvis',
      short:
        'Você fala um pedido nos óculos Meta e um agente de código no seu Mac faz o trabalho. Você aprova no iPhone.',
      long: 'Você fala um pedido nos óculos Meta e um agente de código no seu Mac (Codex, Claude Code ou Grok Code) faz o trabalho. Você aprova no iPhone. O código fica na sua máquina.',
    },
    telao: {
      kicker: 'Open source',
      title: 'Telão',
      short:
        'Compartilhamento de tela peer-to-peer para um grupo do Discord: oito pessoas, quatro telas ao vivo, sem servidor de mídia.',
      long: 'Compartilhamento de tela peer-to-peer para um grupo de amigos do Discord. Até oito pessoas e quatro telas ao vivo numa malha WebRTC, sem servidor de mídia e sem conta. Tem som de meme e tomate jogado em quem está transmitindo.',
    },
    nomad: {
      kicker: 'Nomad · 2024 a 2026',
      title: 'Nomad Explorer',
      short:
        'Liderei a construção do cartão de crédito dentro do app da Nomad, do conceito ao lançamento.',
      long: 'Liderei a construção do cartão de crédito dentro do app da Nomad, do conceito ao lançamento, com fluxos de cartão em conformidade com PCI e provisionamento em Apple Wallet e Google Wallet.',
    },
  },
  projectMedia: {
    jarvis: 'Óculos, Mac, iPhone',
    telao: '8 pessoas · 4 telas · WebRTC',
    telaoAlt: 'Demo do Telão: várias telas compartilhadas numa chamada',
  },
  short: {
    title: 'Com pressa? A versão curta.',
    openSource: '{count} ferramentas open source para agentes',
    writing: 'Textos',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: { heading: 'Contratando? Vamos conversar.', rights: 'Lucas Araujo' },
}

const DICTS: Record<Locale, Dict> = { en, pt }

export function getDict(locale: Locale): Dict {
  return DICTS[locale]
}

export function isTopicId(value: string): value is TopicId {
  return (TOPIC_IDS as readonly string[]).includes(value)
}

const KEYWORDS: Record<TopicId, readonly string[]> = {
  highlights: [
    'proud',
    'achievement',
    'achievements',
    'highlight',
    'highlights',
    'conquista',
    'conquistas',
    'orgulho',
    'orgulha',
    'cartao',
    'card',
    'platinum',
    'wallet',
  ],
  me: [
    'about',
    'who',
    'stack',
    'nomad',
    'experience',
    'background',
    'career',
    'sobre',
    'quem',
    'experiencia',
    'trabalho',
    'tecnologia',
    'carreira',
    'react native',
    'swift',
    'nestjs',
    'nextjs',
  ],
  projects: [
    'project',
    'projeto',
    'built',
    'build',
    'construiu',
    'construi',
    'fez',
    'inker',
    'kitsune',
    'jarvis',
    'telao',
    'nomad explorer',
    'explorer',
    'app',
    'glasses',
    'oculos',
    'widget',
  ],
  'open-source': [
    'open source',
    'opensource',
    'open-source',
    'codigo aberto',
    'github',
    'agent',
    'agente',
    'mcp',
    'tool',
    'ferramenta',
    'codex',
    'claude',
    'ai',
  ],
  writing: [
    'blog',
    'write',
    'wrote',
    'writing',
    'post',
    'article',
    'artigo',
    'escreveu',
    'escrever',
    'escrevo',
    'texto',
    'textos',
    'tutorial',
  ],
  contact: [
    'contact',
    'contato',
    'email',
    'e-mail',
    'hire',
    'hiring',
    'contratar',
    'contratando',
    'reach',
    'linkedin',
    'talk',
    'falar',
    'conversar',
    'twitter',
    'instagram',
  ],
}

function normalize(value: string): string {
  return value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function matchTopic(input: string): TopicId | null {
  const text = normalize(input)
  const tokens = text.split(/[^a-z0-9-]+/).filter(Boolean)
  let best: TopicId | null = null
  let bestScore = 0

  for (const topic of TOPIC_IDS) {
    let score = 0
    for (const keyword of KEYWORDS[topic]) {
      const hit = keyword.includes(' ')
        ? text.includes(keyword)
        : tokens.some(
            (token) =>
              token === keyword ||
              (keyword.length >= 5 && token.startsWith(keyword)),
          )
      if (hit) score += 1
    }
    if (score > bestScore) {
      best = topic
      bestScore = score
    }
  }

  return best
}
