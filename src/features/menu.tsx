import Logo from '@/components/Logo'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'
import MobileMenu from './mobile-menu'
import { MainNavType } from '@/@types'
import Avatar from '@/components/Avatar'
import { getCurrentUser } from '@/lib/session'

export default async function Menu({ navItems }: { navItems: MainNavType }) {
  const user = await getCurrentUser()

  return (
    <header className="py-1 px-4 border-b">
      <div className="flex items-center max-w-screen-2xl m-auto px-4 justify-between">
        {/* Logo */}
        <div className="pr-8">
          <div className="flex gap-2 items-center">
            <Logo />
            <p className="font-bold">Chess</p>
          </div>
        </div>

        {/* Navbar */}
        <Navbar items={navItems} className="flex-1 max-lg:hidden" />

        {/* Actions */}
        <div className="flex gap-4 items-center">
          <ModeToggle variant={'ghost'} />

          {!user && (
            <Link
              className={buttonVariants({
                variant: 'secondary',
                className: 'max-lg:hidden',
              })}
              href="/login"
            >
              Login
            </Link>
          )}

          <Avatar />
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  )
}
