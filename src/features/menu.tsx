import Logo from '@/components/Logo'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'
import MobileMenu from './mobile-menu'

export default function Menu() {
  return (
    <header className="py-4 px-4 border-b">
      <div className="flex items-center max-w-screen-2xl m-auto px-4 justify-between">
        <div className="pr-8">
          <div className="flex gap-2 items-center">
            <Logo />
            <p className="font-bold">Chess</p>
          </div>
        </div>
        <Navbar className="flex-1 max-lg:hidden" />
        <div className="flex gap-4">
          <ModeToggle variant={'ghost'} />
          <Link
            className={buttonVariants({
              variant: 'secondary',
              className: 'max-lg:hidden',
            })}
            href="/login"
          >
            Login
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
