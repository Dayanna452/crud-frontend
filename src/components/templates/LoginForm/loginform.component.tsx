'use client'
import { Button } from 'app/components/atoms/Button'
import { Input } from 'app/components/atoms/Input/input.component'
import { useUser } from 'app/hooks/useUser'
import Link from 'next/link'
import { useState } from 'react'

export const LoginForm = () => {
  const { handleLogin } = useUser()
  const [user, setUser] = useState({ username: '', password: '' })

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    await handleLogin(user)
  }

  return (
    <div className='flex justify-center items-center rounded-lg my-9 flex-col'>
      <h3 className='text-lg text-slate-800'>CRUD APP</h3>
      <Input
        label='Username'
        id='username'
        type='text'
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />
      <Input
        label='Password'
        id='password'
        type='password'
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
      <Link href='/list'>
        <Button onClick={e => handleSubmit(e)}>Log in</Button>
      </Link>
    </div>
  )
}
