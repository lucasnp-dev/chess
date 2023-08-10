'use client'
import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import { LuMenu } from 'react-icons/lu'

import { marketingConfig } from '@/config/marketing'
import Link from '@/components/Link'

export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'secondary'} size={'icon'}>
            <LuMenu size={24} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-1">
          <DropdownMenuLabel>Go to</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {marketingConfig.mainNav.map((item) => (
            <DropdownMenuItem key={`mobilemenu_${item.title}`}>
              <Link href={item.href}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
