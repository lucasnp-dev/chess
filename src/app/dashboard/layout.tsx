import Menu from '@/components/Menu'
import { dashboardConfig } from '@/config/dashboard'
import Footer from '@/features/footer'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Menu.Root>
        <Menu.Logo />
        <Menu.Navbar items={dashboardConfig.menuNav} />
        <Menu.Actions>
          <Menu.Avatar />
          <Menu.Mobile items={dashboardConfig.menuNav} />
        </Menu.Actions>
      </Menu.Root>
      <div className="flex-1">{children}</div>
      <Footer className="border-t" />
    </div>
  )
}
