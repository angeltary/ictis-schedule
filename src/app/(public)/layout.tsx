import Header from '@/components/layout/header'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className='container mx-auto px-4'>{children}</div>
    </>
  )
}
