'use client'

import React from 'react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'

const dummyAuth = {
  email: 'admin@test.com',
  password: 'admin',
}

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please provide email and password')
      return
    }
    if (email !== dummyAuth.email) {
      toast.error('Invalid email or password')
      return
    }
    if (password !== dummyAuth.password) {
      toast.error('Invalid email or password')
      return
    }
    toast.success('Login successfully')
    localStorage.setItem('auth', JSON.stringify({ isLoggedIn: true, email }))
    router.push('/dashboard')
  }

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='email'
          className='font-medium text-sm text-gray capitalize'
        >
          Email Address
        </label>
        <input
          id='email'
          type='email'
          className='appearance-none block w-full bg-transparent text-sm text-secondary border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray'
          placeholder='email@email.com'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='password'
          className='font-medium text-sm text-gray capitalize'
        >
          Password
        </label>

        <input
          id='password'
          type='password'
          className='appearance-none block w-full bg-transparent text-sm text-secondary border border-gray rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray'
          placeholder='**********'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className='text-sm font-normal flex flex-col gap-1'>
        <p>Email: admin@test.com</p>
        <p>Password: admin</p>
      </div>

      <div className='text-right'>
        <Link
          href='#'
          className='trans text-black hover:text-black/70 font-medium text-sm'
        >
          Forgot Password?
        </Link>
      </div>
      <button
        type='submit'
        className='trans bg-[#FFB800] font-medium  text-white w-full border-2 border-transparent hover:bg-[#FFB800]/70 text-lg py-3 tracking-wide rounded'
      >
        Log In
      </button>
    </form>
  )
}

export default LoginForm
