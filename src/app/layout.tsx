import { TanstackQueryProvider } from '@/components/providers/tanstack-query-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import '@/styles/globals.css'

const rubik = Rubik({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Расписание',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${rubik.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
