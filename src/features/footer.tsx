import Logo from '@/components/Logo'
import { ComponentProps } from 'react'

type FooterProps = ComponentProps<'footer'>

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props}>
      <div className="flex p-8 items-center gap-2">
        <Logo />
        <p className="text-sm font-semibold">
          Built by <span className="underline">Chess</span>.
        </p>
      </div>
    </footer>
  )
}
