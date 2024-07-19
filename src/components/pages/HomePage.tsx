"use client"
import { Table } from '../organisms/Table/table.component'
import { Wrapper } from '../templates/Wrapper/wrapper.component'
import { Button } from '../atoms/Button'
import { useUser } from 'app/hooks/useUser';

export const HomePage = () => {
  const { addUser, updateUser, deleteUser, allUsers, user } = useUser()
  const data=[{id:'1', name:'danna',email:'danna@gmail.com',role:'admin',options:`${<Button>+</Button>}`}]
  return (
    <Wrapper>
      <div className='flex w-full justify-end py-6'>
        <Button variant='secondary' pill onClick={() => console.log('clicked')}>
          + Add User
        </Button>
      </div>
      <Table columns={['id', 'name', 'email', 'role', 'options']} rows={data} />
    </Wrapper>
  )
}
