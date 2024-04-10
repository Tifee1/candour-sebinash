import { subTabLinks, tabLinks } from '@/utils/constants'
import React from 'react'
import SingleTabLink from '../SingleTabLink'

type Props = {
  isCollapsed: boolean
  currentRoute: string
}

const SidebarTabLinks = ({ isCollapsed, currentRoute }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {tabLinks.map((tab, i) => {
        return (
          <SingleTabLink
            key={i}
            tab={tab}
            isCollapsed={isCollapsed}
            currentRoute={currentRoute}
          />
        )
      })}
      <div className='border-b border-[#f0f1f2]'></div>
      {subTabLinks.map((tab, i) => {
        return (
          <SingleTabLink
            key={i}
            tab={tab}
            isCollapsed={isCollapsed}
            currentRoute={currentRoute}
          />
        )
      })}
    </div>
  )
}

export default SidebarTabLinks
