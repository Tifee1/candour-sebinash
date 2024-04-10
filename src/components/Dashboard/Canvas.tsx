import Image from 'next/image'
import React from 'react'
import { LuExpand } from 'react-icons/lu'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const Canvas = () => {
  return (
    <div className='hidden lg:block pt-2.5'>
      <div className='flex justify-end'>
        <button className='bg-[#f0f1f2] rounded-t-lg py-1 px-3.5 flex gap-1 items-center justify-center'>
          <span className='text-base'>
            <LuExpand />
          </span>
          <span className='text-xs font-normal'>Collapse</span>
        </button>
      </div>

      <section className='bg-white rounded-t-lg py-[19px] px-4 flex flex-col gap-3 w-[334px]'>
        <h4 className='text-lg font-bold'>Canvas</h4>
        <div className='relative'>
          <Image
            src='/images/canvas.png'
            alt='canva'
            width={302}
            height={648}
            className='rounded-lg'
          />
          <div className='absolute bottom-[72px] w-full'>
            <button className='mx-auto bg-[#0B7D8E] text-white px-7 py-4 rounded-lg flex gap-0.5 items-center font-semibold'>
              <span className='text-[14px]'>Launch Designer </span>
              <span className='text-xl'>
                <MdKeyboardDoubleArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Canvas
