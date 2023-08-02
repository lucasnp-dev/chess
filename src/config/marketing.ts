type MarketingConfig = {
  mainNav: {
    title: string
    href: string
  }[]
}

export const marketingConfig: MarketingConfig = {
  mainNav: [
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
}
