'use client'
import { useState } from 'react'

import { useUser } from 'app/hooks/useUser'
import { Button } from 'app/components/atoms/Button'
import { Input } from 'app/components/atoms/Input/input.component'

export const LoginForm = () => {
  const { handleLogin } = useUser()
  const [user, setUser] = useState({ username: '', password: '' })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    handleLogin(user)
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
        <Button pill onClick={e => handleSubmit(e)}>Log in</Button>
    </div>
  )
}
