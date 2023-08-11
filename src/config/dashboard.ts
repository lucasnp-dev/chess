import { MainNavType } from '@/@types'

export type DashboardConfig = {
  menuNav: MainNavType
}

export const dashboardConfig: DashboardConfig = {
  menuNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
  ],
}
