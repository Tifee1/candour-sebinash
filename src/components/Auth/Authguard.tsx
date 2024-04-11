'use client'

import React, { useEffect, useState } from 'react'
import Loading from '../Layout/Loading'
import { useRouter } from 'next/navigation'

type AuthInfoType = {
  isLoggedIn?: boolean
  email?: string
}

const Authguard = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const router = useRouter()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const authInfo = localStorage.getItem('auth')
    if (!authInfo) {
      router.push('/')
      return
    }

    const parsedAuthInfo: AuthInfoType = JSON.parse(authInfo)

    console.log(parsedAuthInfo)

    if (!parsedAuthInfo.isLoggedIn || !parsedAuthInfo.email) {
      router.push('/')
      return
    }

    setIsLoggedIn(true)
  }, [])

  return isLoggedIn ? <>{children}</> : <Loading />
}

export default Authguard
