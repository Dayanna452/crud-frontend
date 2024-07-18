'use-client'
import { Button } from 'app/components/atoms/Button'
import { Input } from 'app/components/atoms/Input/input.component'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div className='flex justify-center items-center rounded-lg my-9 flex-col'>
      <h3 className='text-lg text-slate-800'>CRUD APP</h3>
      <Input label='Username' id='username' type='text' value='' />
      <Input label='Password' id='password' type='password' value='' />
      <Link href='/list'>
        <Button>Log in</Button>
      </Link>
    </div>
  )
}
