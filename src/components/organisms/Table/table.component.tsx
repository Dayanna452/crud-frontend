import { TableBody } from 'app/components/molecules/TableBody/tablebody.component'
import { TableHeader } from 'app/components/molecules/TableHeader/tableheader.component'

interface TableProps {
  columns: string[]
  rows: any[]
}

export const Table = ({ columns, rows }: TableProps) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-6 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light text-surface text-gray-600'>
              <TableHeader columns={columns} />
              <TableBody rows={rows} />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
