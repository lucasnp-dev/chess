import Logo from '@/components/Logo'
import { ComponentProps } from 'react'

type FooterProps = ComponentProps<'footer'>

export default function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props}>
      <div className="flex p-8 items-center gap-2">
        <Logo />
      </div>
    </footer>
  )
}
