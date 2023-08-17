'use client'
import { signOut } from 'next-auth/react'
import { DropdownMenuItem, DropdownMenuShortcut } from '../ui/dropdown-menu'

export default function MenuAvatarSignOut() {
  return (
    <DropdownMenuItem onClick={() => signOut()}>
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  )
}
