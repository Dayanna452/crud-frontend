'use client'
import { Button } from 'app/components/atoms/Button'
import { Input } from 'app/components/atoms/Input/input.component'
import { handleLogin } from 'app/hooks/useUser'
import Link from 'next/link'

export const LoginForm = () => {

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const formData = new FormData(e.target as HTMLFormElement);
    e.preventDefault();
    await handleLogin(formData);
  }

  return (
    <div className='flex justify-center items-center rounded-lg my-9 flex-col'>
      <h3 className='text-lg text-slate-800'>CRUD APP</h3>
      <Input label='Username' id='username' type='text' value='' />
      <Input label='Password' id='password' type='password' value='' />
      <Link href='/list'>
        <Button onClick={(e)=>handleSubmit(e)}>Log in</Button>
      </Link>
    </div>
  )
}
