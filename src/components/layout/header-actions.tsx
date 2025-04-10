'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderActions() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className='hover:bg-accent rounded-md p-2 transition-colors'
      >
        {theme === 'dark' ? (
          <Sun className='h-5 w-5' />
        ) : (
          <Moon className='h-5 w-5' />
        )}
      </button>

      <Link
        href='https://github.com/angeltary/ictis-schedule'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:bg-accent rounded-md p-[10px] transition-colors'
      >
        <Image
          src='/github.svg'
          alt='GitHub'
          width={18}
          height={18}
          className='dark:invert'
        />
      </Link>
    </>
  )
}
