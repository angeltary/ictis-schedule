import Header from '@/components/layout/header/header'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen'>
      <Header />
      <div className='container mx-auto px-4'>{children}</div>
    </div>
  )
}
