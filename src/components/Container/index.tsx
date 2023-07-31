import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerType = ComponentProps<'div'>

export default function Container({
  children,
  className,
  ...rest
}: ContainerType) {
  return (
    <div
      {...rest}
      className={twMerge(
        'px-2 pt-16 lg:mx-auto lg:max-w-screen-2xl lg:px-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
