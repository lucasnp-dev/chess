import { MainNavType } from '@/@types'

export type MarketingConfig = {
  page: {
    title: string
  }
  menuNav: MainNavType
}

export const marketingConfig: MarketingConfig = {
  menuNav: [
    {
      title: 'Features',
      href: '/#features',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
  ],
  page: {
    title: 'An excellent chess opening to start a new project.',
  },
}
