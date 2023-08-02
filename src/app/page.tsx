import Container from '@/components/Container'
import { buttonVariants } from '@/components/ui/button'
import Menu from '@/features/menu'
import Link from 'next/link'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      <Menu />

      <Container>
        <div className="text-center max-w-[64rem] m-auto flex flex-col gap-4 items-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            An excellent chess opening to start a new project.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with the powerful Next.js 13 and
            open-sourcing everything. Advance your pieces and follow along
            closely as we figure this out together, unraveling strategic moves!
          </p>
          <div className="flex gap-4">
            <Link
              href={'/login'}
              className={buttonVariants({ variant: 'default' })}
            >
              Get Started
            </Link>
            <Link
              href={'https://github.com/lucasnp-dev/chess'}
              target="_blank"
              className={buttonVariants({ variant: 'outline' })}
            >
              Github
            </Link>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
