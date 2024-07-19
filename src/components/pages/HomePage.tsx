import { Table } from '../organisms/Table/table.component'
import { Wrapper } from '../templates/Wrapper/wrapper.component'
import { Button } from '../atoms/Button'
import { useUser } from 'app/hooks/useUser'

export const HomePage = () => {
  const { addUser, updateUser, deleteUser, allUsers, user } = useUser()
  return (
    <Wrapper>
      <div className='flex w-full justify-end py-6'>
        <Button variant='secondary' pill onClick={() => console.log('clicked')}>
          + Add User
        </Button>
      </div>
      <Table columns={['id', 'name', 'email', 'role', 'options']} rows={[]} />
    </Wrapper>
  )
}
