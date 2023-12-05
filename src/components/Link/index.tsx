import LinkNext, {LinkProps} from 'next/link'
import { ComponentProps } from 'react'

// type AncorProps = ComponentProps<'a'>
type AncorProps = LinkProps & {
  children: React.ReactNode

}

export default function Link({ children, ...props }: AncorProps) {
  return <LinkNext {...props}>{children}</LinkNext>
}
