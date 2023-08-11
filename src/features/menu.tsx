'use client'
import Logo from '@/components/Logo'
import { Button, buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import Navbar from '@/components/Navbar'
import Link from '@/components/Link'
import MobileMenu from './mobile-menu'
import { MainNavType } from '@/@types'
import { signOut } from 'next-auth/react'

export default function Menu({ navItems }: { navItems: MainNavType }) {
  return (
    <header className="py-1 px-4 border-b">
      <div className="flex items-center max-w-screen-2xl m-auto px-4 justify-between">
        <div className="pr-8">
          <div className="flex gap-2 items-center">
            <Logo />
            <p className="font-bold">Chess</p>
          </div>
        </div>
        <Navbar items={navItems} className="flex-1 max-lg:hidden" />
        <div className="flex gap-4 items-center">
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
          <Button onClick={() => signOut({ callbackUrl: '/' })}>SignOut</Button>
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  )
}
