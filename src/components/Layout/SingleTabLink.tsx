import { TabLink } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

type Props = {
  tab: TabLink
  currentRoute: string
  isCollapsed?: boolean
  toggle?: () => void
}

const SingleTabLink = ({
  tab,
  currentRoute,
  isCollapsed = false,
  toggle,
}: Props) => {
  return (
    <Link
      href={tab.path}
      className={`px-5 py-3 flex gap-1 rounded-lg text-gray ${
        currentRoute === tab.path && 'bg-darkgray text-white'
      } ${isCollapsed && 'justify-center'}`}
      onClick={toggle}
    >
      {tab.icon}
      {!isCollapsed && tab.name}
    </Link>
  )
}

export default SingleTabLink
