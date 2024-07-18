'use-client'
import { Button } from 'app/components/atoms/Button'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div className='flex justify-center items-center rounded-lg shadow-inner shadow-xl flex-col'>
      <h3 className='text-lg text-slate-800'>CRUD APP</h3>
      <Link href='/list'>
        <Button>Log in</Button>
      </Link>
    </div>
  )
}
