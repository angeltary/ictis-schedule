import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='px-4 py-10 text-center sm:px-6 lg:px-8'>
        <h1 className='block text-8xl font-bold text-primary'>404</h1>
        <p className='mt-6 text-lg text-muted-foreground'>
          Кажется, мы потеряли эту страницу.
        </p>
        <div className='mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3'>
          <Button asChild>
            <Link href='/'>На главную</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
