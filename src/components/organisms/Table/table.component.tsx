import { TableBody } from "app/components/molecules/TableBody/tablebody.component"
import { TableHeader } from "app/components/molecules/TableHeader/tableheader.component"

export const Table = () => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light text-surface text-gray-600'>
              <TableHeader columns={['#', 'First Name', 'Last Name', 'Username']} />
              <TableBody rows={[]} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
