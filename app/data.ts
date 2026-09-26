type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type OpenSource = {
  name: string
  description: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export type BackgroundItem =
  | { kind: 'school'; id: string; school: string; start: string; end: string }
  | { kind: 'project'; id: string; name: string; org: string; start: string; end: string }
  | { kind: 'credential'; id: string; name: string; org: string; when: string }

export const OPEN_SOURCE: OpenSource[] = [
  {
    name: 'agent-action-gate',
    description:
      'Approval for an action. An uncertain API result stays uncertain until someone reconciles it.',
    link: 'https://lucasaraujonrt.github.io/agent-action-gate/',
    id: 'os-1',
  },
  {
    name: 'agent-media-jobs',
    description:
      'fal.ai jobs with a cost estimate, a spend cap, and a check of the file that comes back.',
    link: 'https://lucasaraujonrt.github.io/agent-media-jobs/',
    id: 'os-2',
  },
  {
    name: 'meta-ops-mcp',
    description:
      'Read Instagram and Meta Ads, and prepare campaign changes for a separate approval.',
    link: 'https://lucasaraujonrt.github.io/meta-ops-mcp/',
    id: 'os-3',
  },
  {
    name: 'agent-task-board',
    description: 'Create, find, and update tasks from a CLI or MCP.',
    link: 'https://lucasaraujonrt.github.io/agent-task-board/',
    id: 'os-4',
  },
  {
    name: 'agent-unknowns',
    description:
      'Assumptions and questions before implementation, in an interactive document.',
    link: 'https://lucasaraujonrt.github.io/agent-unknowns/',
    id: 'os-5',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Inker',
    description:
      'Platform for tattoo artists. Agenda, clients, and Kitsune, the studio assistant.',
    link: 'https://inker.me/',
    video: '/inker.mp4',
    id: 'project2',
  },
  {
    name: 'Nomad Explorer',
    description: 'Mobile implementation of the Nomad Explorer credit card.',
    link: 'https://www.nomadglobal.com/nomad-explorer-infinite',
    video: '/nomad-explorer.mp4',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Inker',
    title: 'Founder',
    start: '2025',
    end: 'Present',
    link: 'https://inker.me/',
    id: 'work2',
  },
  {
    company: 'Nomad Global',
    title: 'Software Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://nomadglobal.com',
    id: 'work1',
  },
  {
    company: 'MB Labs',
    title: 'Software Engineer',
    start: '2022',
    end: '2024',
    link: 'https://mblabs.com.br/',
    id: 'work3',
  },
  {
    company: 'CI&T',
    title: 'Front-end Developer',
    start: '2022 - Jan',
    end: '2022 - Dec',
    link: 'https://ciandt.com/',
    id: 'work4',
  },
  {
    company: 'MB Labs',
    title: 'Software Engineer',
    start: '2020',
    end: '2022',
    link: 'https://mblabs.com.br/',
    id: 'work5',
  },
]

export const BACKGROUND: readonly BackgroundItem[] = [
  { kind: 'school', id: 'school-puc', school: 'Pontifícia Universidade Católica de Campinas', start: '2018', end: '2022' },
  { kind: 'project', id: 'project-smart-check-in', name: 'Smart Check In', org: 'PierServ Logistica', start: 'Oct 2020', end: 'Mar 2021' },
  { kind: 'credential', id: 'credential-omnistack', name: 'Semana Omnistack 11', org: 'Rocketseat', when: 'Apr 2020' },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building Native iOS Widgets with Swift in Expo',
    description:
      'How I used @bacons/apple-targets to build native SwiftUI widgets for React Native without ejecting from Expo.',
    link: '/blog/inker-widgets',
    uid: 'blog-6',
  },
  {
    title: 'Trello API Integration: A Simple Solution for Support Tickets',
    description:
      'Learn how to integrate Trello API to create an organized and visual support ticket system with automatic card creation.',
    link: '/blog/trello',
    uid: 'blog-5',
  },
  {
    title:
      'Sending Logs to Discord with Webhooks: A Cost-Effective Monitoring Solution',
    description:
      'Learn how to implement a functional and cost-free logging system using Discord webhooks for real-time notifications.',
    link: '/blog/discord',
    uid: 'blog-4',
  },
  {
    title: 'How i create a full cross platform to find Inkers',
    description: 'A full story about ink-er.me',
    link: '/blog/inker',
    uid: 'blog-3',
  },
  {
    title: 'Create a Signature component in React Native',
    description: 'How to create a signature component',
    link: '/blog/signature-component',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lucasaraujonrt',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/lucasaraujonrt',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lucasaraujonrt',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/lucasaraujonrt',
  },
]

export const EMAIL = 'lucasaraujo8186@gmail.com'
