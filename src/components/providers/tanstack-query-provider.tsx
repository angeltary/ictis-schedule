'use client'

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import {
  PersistQueryClientProvider,
  Persister,
} from '@tanstack/react-query-persist-client'
import { useEffect, useState } from 'react'

export function TanstackQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          refetchInterval: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          refetchOnMount: false,
        },
      },
    }),
  )

  const [persister, setPersister] = useState<Persister | null>(null)

  useEffect(() => {
    setPersister(
      createSyncStoragePersister({
        storage: window.localStorage,
      }),
    )
  }, [])

  if (!persister) {
    return
  }

  return (
    <PersistQueryClientProvider
      client={client}
      persistOptions={{
        persister,
        dehydrateOptions: {
          shouldDehydrateQuery: query =>
            query.state.status === 'success' && !!query.meta?.persist,
        },
      }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}
