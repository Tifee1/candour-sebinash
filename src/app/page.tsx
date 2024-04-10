import DesktopSidebar from '@/components/Layout/DesktopSidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid lg:grid-cols-[auto,1fr] gap-4'>
      <DesktopSidebar />
    </main>
  )
}
