import { subTabLinks, tabLinks } from '@/utils/constants'
import React from 'react'
import SingleTabLink from '../SingleTabLink'

type Props = {
  currentRoute: string
  toggle: () => void
}

const SidebarTabLinks = ({ currentRoute, toggle }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {tabLinks.map((tab, i) => {
        return (
          <SingleTabLink
            key={i}
            tab={tab}
            currentRoute={currentRoute}
            toggle={toggle}
          />
        )
      })}
      <div className='border-b border-[#f0f1f2]'></div>
      {subTabLinks.map((tab, i) => {
        return (
          <SingleTabLink
            key={i}
            tab={tab}
            currentRoute={currentRoute}
            toggle={toggle}
          />
        )
      })}
    </div>
  )
}

export default SidebarTabLinks
