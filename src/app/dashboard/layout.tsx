'use client'

import React, { useState } from 'react'
import DashboardHeader from '@/components/DashboardHeader'
import DesktopSidebar from '@/components/Layout/DesktopSidebar'
import MobileSidebar from '@/components/Layout/MobileSidebar'
import Authguard from '@/components/Auth/Authguard'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isSmallSidebarOpen, setIsSmallSidebarOpen] = useState<boolean>(false)

  return (
    <Authguard>
      <main className='grid lg:grid-cols-[auto,1fr] gap-4 w-full'>
        <DesktopSidebar />
        <MobileSidebar
          isSmallSidebarOpen={isSmallSidebarOpen}
          setIsSmallSidebarOpen={setIsSmallSidebarOpen}
        />
        <div className='min-h-screen lg:min-h-auto'>
          <DashboardHeader setIsSmallSidebarOpen={setIsSmallSidebarOpen} />
          <div className='py-4 w-full'>{children}</div>
        </div>
      </main>
    </Authguard>
  )
}
