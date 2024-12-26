import { Layers } from 'lucide-react'

export const Navbar = () => {
  return (
    <header className='bg-gray-100'>
      <div className='mx-auto max-w-screen-xl p-4'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between'>
          <div className='flex flex-row items-center gap-3'>
            <Layers className='text-zinc-900  translate-y-[1.5px]' />
            <h1 className='text-xl font-bold text-zinc-900 sm:text-3xl p-0'>
              Расписание
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
