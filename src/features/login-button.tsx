import Link from '@/components/Link'
import { buttonVariants } from '@/components/ui/button'

export default function LoginButton() {
  return (
    <Link
      className={buttonVariants({
        variant: 'secondary',
        className: 'max-lg:hidden',
      })}
      href="/login"
    >
      Login
    </Link>
  )
}
