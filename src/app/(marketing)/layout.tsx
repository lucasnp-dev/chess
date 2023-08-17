import Menu from '@/components/Menu'
import { marketingConfig } from '@/config/marketing'
import Footer from '@/features/footer'
import LoginButton from '@/features/login-button'
import { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Menu.Root>
        <Menu.Logo />
        <Menu.Navbar items={marketingConfig.menuNav} />
        <Menu.Actions>
          <LoginButton />
          <Menu.Mobile items={marketingConfig.menuNav} />
        </Menu.Actions>
      </Menu.Root>

      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
