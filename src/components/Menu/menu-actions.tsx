import { childrenType } from '@/@types'
import { ModeToggle } from '@/features/mode-toggle'

export default async function MenuActions({ children }: childrenType) {
  return (
    <div className="flex gap-4 items-center">
      <ModeToggle variant={'ghost'} />

      {children}
    </div>
  )
}
