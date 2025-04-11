import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='px-4 py-10 text-center sm:px-6 lg:px-8'>
        <h1 className='text-primary block text-8xl font-bold'>404</h1>
        <p className='text-muted-foreground mt-6 text-lg'>
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
