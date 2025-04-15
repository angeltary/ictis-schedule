import { TanstackQueryProvider } from '@/components/providers/tanstack-query-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import YandexMetrika from '@/components/analytics/yandex-metrika'
import '@/styles/globals.css'
import { isProduction } from '@/lib/utils/is-production'
import { YANDEX_METRIKA_ID } from '@/constants/env'

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
          <TanstackQueryProvider>
            {children}
            {isProduction && <YandexMetrika id={YANDEX_METRIKA_ID} />}
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
