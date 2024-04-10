'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import SidebarTabLinks from './SidebarTabLinks'
import SidebarMessages from './SidebarMessages'
import SidebarProfile from './SidebarProfile'

const DesktopSidebar = () => {
  const currentRoute = usePathname()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    localStorage.getItem('sidebarCollapsed') === 'true' ? true : false
  )

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  return (
    <aside
      className={`hidden lg:flex trans bg-white py-8 ${
        isCollapsed ? 'px-4' : 'px-8'
      } flex-col gap-[43px] relative`}
    >
      <button
        className='absolute top-8 right-0 bg-[#F0F1F2] text-[#D9DBDB] py-2 px-1 rounded-l-full'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      <div className={`px-5 flex gap-2.5 ${isCollapsed && 'justify-center'}`}>
        <Image src='/images/logo.svg' alt='logo' width={24} height={24} />
        {!isCollapsed && <h3 className='text-2xl font-bold'>Sebinash</h3>}
      </div>
      <SidebarTabLinks isCollapsed={isCollapsed} currentRoute={currentRoute} />
      <SidebarMessages isCollapsed={isCollapsed} />
      <SidebarProfile isCollapsed={isCollapsed} />
    </aside>
  )
}

export default DesktopSidebar
