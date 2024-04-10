'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import SidebarTabLinks from './SidebarTabLinks'
import SidebarMessages from './SidebarMessages'
import SidebarProfile from './SidebarProfile'

type Props = {
  isSmallSidebarOpen: boolean
  setIsSmallSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileSidebar = ({
  isSmallSidebarOpen,
  setIsSmallSidebarOpen,
}: Props) => {
  const currentRoute = usePathname()

  const toggle = () => {
    setIsSmallSidebarOpen(false)
  }

  return (
    <aside className='lg:hidden'>
      <div
        className={`trans fixed inset-0 h-full bg-[rgba(0,_0,_0,_0.7)] flex justify-center items-center -z-10 opacity-0 ${
          isSmallSidebarOpen && ' z-[99] opacity-100'
        }
        `}
      >
        <div className='bg-white w-[90vw] h-[95vh] overflow-y-auto rounded-md py-16 px-8 relative flex items-center flex-col'>
          <button
            className='trans absolute top-2.5 left-2.5 bg-transparent border-transparent text-2xl text-red-700 hover:text-red-500 pointer'
            onClick={toggle}
          >
            <FaTimes />
          </button>
          <header>
            <div className='flex gap-2.5 justify-center'>
              <Image src='/images/logo.svg' alt='logo' width={24} height={24} />
              <h3 className='text-2xl font-bold'>Sebinash</h3>
            </div>
          </header>
          <div className='pt-8 flex flex-col'>
            <SidebarTabLinks currentRoute={currentRoute} toggle={toggle} />
            <SidebarMessages />
            <SidebarProfile />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default MobileSidebar
