import { childrenType } from '@/@types'

export default function MenuRoot({ children }: childrenType) {
  return (
    <header className="py-1 px-4 border-b">
      <div className="flex items-center max-w-screen-2xl m-auto px-4 justify-between">
        {children}
      </div>
    </header>
  )
}
