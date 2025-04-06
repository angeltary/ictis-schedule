import Image from 'next/image'

import ThemeSwitch from '@/components/ui/theme-switcher'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='mb-6 border-b'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-4'>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='logo'
              width={48}
              height={48}
              className='rounded-md'
            />
          </Link>
          <div className='text-2xl font-bold'>Расписание</div>
        </div>

        <div className='flex items-center gap-2'>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
