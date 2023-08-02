import { ComponentProps } from 'react'

type AncorProps = ComponentProps<'a'>

export default function Link({ children, ...props }: AncorProps) {
  return <a {...props}>{children}</a>
}
