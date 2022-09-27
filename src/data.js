import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
} from './components/Icons'

export const navLinks = [
  {
    name: 'Home',
    url: '#hero',
  },
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Portfolio',
    url: '#portfolio',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
]

export const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/indra120',
    Icon: GithubIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/indra-pranata-ryzenix',
    Icon: LinkedInIcon,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/indra.ryzenix.id',
    Icon: InstagramIcon,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/indryzenix',
    Icon: TelegramIcon,
  },
]

export const projects = [
  {
    title: 'Blog Site',
    livePreview: 'https://blog-lf9stiux2-indra120.vercel.app',
    imageUrl: '/images/projects/1.png',
    description: 'Written in TypeScript. I use NextJS, MUI, and Hygraph as CMS. The content is still Lorem ipsum.',
  },
  {
    title: 'Blog Homepage Layout',
    livePreview: 'https://indra120.github.io/blog-homepage-layout',
    imageUrl: '/images/projects/2.png',
    description: 'One of the hardest project that I do when starting web development journey. I use HTML, SCSS, and a little bit of JavaScript',
  },
  {
    title: 'To-do List',
    livePreview: 'https://indra120.github.io/todo-list-app-react',
    imageUrl: '/images/projects/3.png',
    description: 'This is not my project, but "Our Project". I believe that every human being that know how to code, will also make their own to-do app. I use React and MUI to make this app',
  },
  {
    title: 'Bookshelf',
    livePreview: 'https://indra120.github.io/bookshelf-apps',
    imageUrl: '/images/projects/4.png',
    description: 'Just a simple client-side CRUD application, like those to-do app. I use the vanilla HTML-CSS-JS trinity.',
  },
]

export const sectionHeader = {
  portfolio: {
    title: 'Portfolio',
    headline: 'Finished Projects',
    shortDesc: 'There are another cool projects that still not finished yet',
  },
  contact: {
    title: 'Contact',
    headline: 'Get in Touch',
    shortDesc: 'You cand ask me anything that you want',
  },
}