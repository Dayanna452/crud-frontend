'use client'
import { Table } from '../organisms/Table/table.component'
import { Wrapper } from '../templates/Wrapper/wrapper.component'
import { Button } from '../atoms/Button'
import { useUser } from 'app/hooks/useUser'

export const HomePage = () => {
  const {
    addUser,
    handleAddUser,
    handleUpdateUser,
    handleDeleteUser,
    allUsers,
    user
  } = useUser()

  const newAllUsers = allUsers?.users.map((user: any) => {
    const { id, name, email, role } = user
    return { id, name, email, role }
  })

  return (
    <Wrapper>
      <div className='flex w-full justify-end py-6'>
        <Button variant='secondary' pill onClick={handleAddUser}>
          + Add User
        </Button>
      </div>
      <Table
        columns={['id', 'name', 'email', 'role', 'options']}
        rows={newAllUsers ||[]}
        deleteButton={handleDeleteUser}
        updateButton={handleUpdateUser}
      />
    </Wrapper>
  )
}
