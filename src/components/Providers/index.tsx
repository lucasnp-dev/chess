'use client'
import { ThemeProvider } from './theme-provider'
import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}
