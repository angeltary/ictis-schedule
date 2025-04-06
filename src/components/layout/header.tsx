import { Layers } from 'lucide-react'

export default function Header() {
  return (
    <header className='bg-white mb-6 border-b border-border'>
      <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8'>
        <Layers className='size-8' />

        <div className='text-2xl font-bold'>Расписание</div>
      </div>
    </header>
  )
}
