import React from 'react'
import Image from 'next/image'

import { dummyMessages } from '@/utils/constants'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

type Props = {
  isCollapsed: boolean
}

const SidebarMessages = ({ isCollapsed }: Props) => {
  return (
    <div className='bg-[#FBEFD0] px-4 py-3 rounded-lg flex flex-col gap-2.5'>
      {!isCollapsed && <h4 className='text-base font-bold'>Messages</h4>}
      <ul className={`flex gap-1 ${isCollapsed && 'flex-col items-center'}`}>
        {dummyMessages
          .slice(0, isCollapsed ? 2 : dummyMessages.length)
          .map((message, i) => (
            <li key={i} className='relative'>
              <Image
                src={message.img}
                alt={`dummy ${i}`}
                width={32}
                height={32}
              />
              <span className='absolute top-5 left-4 bg-[#EBFAF3] text-[#008F51] px-1 w-4 h-4 rounded-full text-[10px] font-normal text-center '>
                {message.number}
              </span>
            </li>
          ))}
      </ul>
      <button className='bg-[#FFB800] text-white text-xs font-medium py-[7px] px-4 flex gap-0.5 items-center rounded-lg'>
        {!isCollapsed && <span> Open messages</span>}
        <span className='text-2xl'>
          <MdKeyboardDoubleArrowRight />
        </span>
      </button>
    </div>
  )
}

export default SidebarMessages
