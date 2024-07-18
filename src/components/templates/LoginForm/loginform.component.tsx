'use-client'
import { Button } from 'app/components/atoms/Button'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div>
      <h3>CRUD APP</h3>
      <Link href='/list'>
        <Button>Log in</Button>
      </Link>
    </div>
  )
}
