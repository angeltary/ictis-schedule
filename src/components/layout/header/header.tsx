import Image from 'next/image'

import ThemeSwitcher from '@/components/layout/header/theme-switcher'
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

        <div className='flex items-center gap-1'>
          <ThemeSwitcher />

          <Link
            href='https://github.com/angeltary/ictis-schedule'
            target='_blank'
            rel='noopener noreferrer'
            className='p-[10px] rounded-md hover:bg-accent transition-colors'
          >
            <Image
              src='/github.svg'
              alt='GitHub'
              width={18}
              height={18}
              className='dark:invert'
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
