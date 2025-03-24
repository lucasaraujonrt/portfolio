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

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Nomad Explorer',
    description: 'Full development mobile implementation credit card',
    link: 'https://www.nomadglobal.com/nomad-explorer',
    video: './nomad-explorer.mp4',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Ink-er',
    title: 'Founder',
    start: '2025',
    end: 'Present',
    link: 'https://ink-er.me',
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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How i create a full cross platform to find Inkers',
    description: 'A full story about ink-er.me',
    link: '/blog/inker',
    uid: 'blog-3',
  },
  {
    title: 'PCI Credit Card PCI Compliance',
    description: 'How we implement PCI Compliance ',
    link: '/blog/pci',
    uid: 'blog-1',
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

export const EMAIL = 'lucasaraujo8186@email.com'
