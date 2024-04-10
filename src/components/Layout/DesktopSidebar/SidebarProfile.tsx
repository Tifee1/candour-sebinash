import React from 'react'
import Image from 'next/image'

type Props = {
  isCollapsed: boolean
}

const SidebarProfile = ({ isCollapsed }: Props) => {
  return (
    <div
      className={`bg-[#F9FAFB] py-2 px-3 rounded-lg flex gap-3 ${
        isCollapsed && 'justify-center'
      }`}
    >
      <Image src='/images/avatar.png' alt='avatar' width={40} height={40} />
      {!isCollapsed && (
        <div className='flex flex-col items-start'>
          <span className='text-secondary text-sm font-medium'>
            Ajani Abel-Cain
          </span>
          <span className='bg-[#ECF7F9] text-[#0B7D8E] text-xs font-normal rounded-[4px] px-1'>
            Online
          </span>
        </div>
      )}
    </div>
  )
}

export default SidebarProfile
