import { marketingConfig } from '@/config/marketing'
import Footer from '@/features/footer'
import Menu from '@/features/menu'
import { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Menu navItems={marketingConfig.menuNav} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
