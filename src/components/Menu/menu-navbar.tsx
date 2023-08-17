import { ComponentProps } from 'react'
import Link from '../Link'
import { MainNavType } from '@/@types'

type NavbarProps = ComponentProps<'nav'> & { items: MainNavType }

export default function MenuNavbar({ items, ...props }: NavbarProps) {
  return (
    <nav {...props} className="flex-1 max-lg:hidden">
      <ul className="flex space-x-4 w-full text-muted-foreground text-sm items-center font-semibold">
        {items.map((item) => (
          <li key={`navbar_${item.title}`}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
