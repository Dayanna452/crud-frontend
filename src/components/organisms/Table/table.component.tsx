import { TableBody } from 'app/components/molecules/TableBody/tablebody.component'
import { TableHeader } from 'app/components/molecules/TableHeader/tableheader.component'

interface TableProps {
  columns: string[]
  rows: any[]
  deleteButton?: (id:string) => void
  updateButton?: (formData: FormData) => void
}

export const Table = ({
  columns,
  rows,
  deleteButton,
  updateButton
}: TableProps) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full py-6'>
          <div className='overflow-hidden'>
            <table className='min-w-full text-left text-sm font-light text-surface text-gray-600'>
              <TableHeader columns={columns} />
              <TableBody
                rows={rows}
                deleteButton={deleteButton}
                updateButton={updateButton}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
