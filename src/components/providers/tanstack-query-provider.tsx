'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchInterval: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          refetchOnMount: false,
        },
      },
    }),
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
