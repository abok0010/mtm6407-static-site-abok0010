import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-CA',
    title: 'Tech Enthusiast',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Tech',
            link: '/tech',
          },
          {
            text: 'About',
            link: '/about.md',
        },
          {
            text: 'Contact',
            link: '/contact.md',
        },
        ],
        logo: '/images/trello.svg',
    }),
}