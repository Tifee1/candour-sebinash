import LoginForm from '@/components/Auth/LoginForm'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='bg-white w-[90%] max-w-lg mx-auto my-10 flex flex-col rounded-md p-10'>
      <div className='flex flex-col gap-14'>
        <div>
          <div className='flex gap-2.5 justify-center'>
            <Image src='/images/logo.svg' alt='logo' width={24} height={24} />
            <h3 className='text-2xl font-bold'>Sebinash</h3>
          </div>
        </div>
        <LoginForm />
      </div>
    </section>
  )
}
