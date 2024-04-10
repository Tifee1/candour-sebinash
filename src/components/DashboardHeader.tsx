import React, { useState } from 'react'
import Image from 'next/image'

import { FaAlignLeft, FaRegBell, FaSearch } from 'react-icons/fa'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { LuFileBarChart2 } from 'react-icons/lu'
import { TbLogout } from 'react-icons/tb'

type Props = {
  setIsSmallSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardHeader = ({ setIsSmallSidebarOpen }: Props) => {
  return (
    <nav className='flex flex-col gap-4 bg-white px-6 pt-[22px] pb-4'>
      <header className='flex justify-between items-center lg:hidden'>
        <div className='flex gap-2.5 justify-center'>
          <Image src='/images/logo.svg' alt='logo' width={24} height={24} />
          <h3 className='text-2xl font-bold'>Sebinash</h3>
        </div>
        <button
          className='bg-transparent border-transparent text-3xl text-pry pointer flex items-center lg:hidden'
          onClick={() => setIsSmallSidebarOpen(true)}
        >
          <FaAlignLeft />
        </button>
      </header>
      <div className='flex justify-between'>
        <div className='bg-[#f0f1f2] border border-[#e4e5e5] rounded-lg py-1 px-4 w-[250px] md:w-[400px] flex gap-4 items-center'>
          <span className='text-gray font-light'>
            <FaSearch />
          </span>
          <input
            type='text'
            className='bg-transparent outline-none h-10 text-xs font-normal text-gray flex-1'
            placeholder='Search'
          />
        </div>
        <div className='hidden md:flex gap-6'>
          <div className='flex gap-2'>
            <button className='bg-[#f0f1f2] rounded-full w-10 h-10 flex items-center justify-center'>
              <HiOutlineMenuAlt1 />
            </button>
            <button className='bg-[#f0f1f2] rounded-full w-10 h-10 flex items-center justify-center'>
              <LuFileBarChart2 />
            </button>
          </div>
          <button className='bg-[#f0f1f2] rounded-full w-10 h-10 flex items-center justify-center'>
            <FaRegBell />
          </button>
          <button className='bg-[#faf4f4] text-[#C52D26] rounded-full w-10 h-10 flex items-center justify-center'>
            <TbLogout />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default DashboardHeader
