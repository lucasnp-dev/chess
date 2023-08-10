import Container from '@/components/Container'
import { buttonVariants } from '@/components/ui/button'
import Menu from '@/features/menu'
import Link from 'next/link'
import { Fragment } from 'react'

import { marketingConfig } from '@/config/marketing'
import { Card, CardContent } from '@/components/ui/card'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiPlanetscale } from 'react-icons/si'
import Logo from '@/components/Logo'

export default function App() {
  return (
    <Fragment>
      <Menu />

      <Container className="pb-16 lg:pb-32 px-4">
        <div className="text-center max-w-[64rem] m-auto flex flex-col gap-4 items-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {marketingConfig.page.title}
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

      <div className="bg-slate-50 dark:bg-zinc-900 py-16 lg:py-32 px-4">
        <Container>
          <div className="max-w-[64rem] m-auto flex flex-col gap-8 items-center">
            <h2
              className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold"
              id="features"
            >
              Features
            </h2>
            <p className="text-center max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              This is a trial to examine how user login, subscriptions, API
              routes, and static pages perform in a Next.js 13 directory.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="pt-6">
                <CardContent className="space-y-2">
                  <SiNextdotjs size={48} />
                  <h3 className="text-lg font-semibold">Next.js</h3>
                  <p className="text-muted-foreground">
                    App folder, navigation, designs, loading visuals, API
                    routes.
                  </p>
                </CardContent>
              </Card>
              <Card className="pt-6">
                <CardContent className="space-y-2">
                  <FaReact size={48} />
                  <h3 className="text-lg font-semibold">React</h3>
                  <p className="text-muted-foreground">
                    Server and Client Components. Use hook.
                  </p>
                </CardContent>
              </Card>
              <Card className="pt-6">
                <CardContent className="space-y-2">
                  <SiPlanetscale size={48} />
                  <h3 className="text-lg font-semibold">Database</h3>
                  <p className="text-muted-foreground">
                    ORM using Prisma and deployed on PlanetScale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      <footer>
        <div className="flex p-8 items-center gap-2">
          <Logo />
          <p className="text-sm font-semibold">
            Built by <span className="underline">Chess</span>.
          </p>
        </div>
      </footer>
    </Fragment>
  )
}
