import { dashboardConfig } from '@/config/dashboard'
import Footer from '@/features/footer'
import Menu from '@/features/menu'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Menu navItems={dashboardConfig.menuNav} />
      <div className="flex-1">{children}</div>
      <Footer className="border-t" />
    </div>
  )
}
