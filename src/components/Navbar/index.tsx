import { ComponentProps } from 'react'
import Link from '../Link'

import { marketingConfig } from '@/config/marketing'

type NavbarProps = ComponentProps<'nav'>

export default function Navbar({ ...props }: NavbarProps) {
  return (
    <nav {...props}>
      <ul className="flex space-x-4 w-full text-muted-foreground text-sm items-center font-semibold">
        {marketingConfig.mainNav.map((item) => (
          <li key={`navbar_${item.title}`}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
