import { Button } from 'app/components/atoms/Button'

interface TableBodyProps {
  rows: any[]
  updateButton?: (formData: FormData) => void
  deleteButton?: (id:string) => void 
}

export const TableBody = ({
  rows,
  deleteButton,
  updateButton
}: TableBodyProps) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr className='px-6' key={index}>
          {Object.keys(row).map((key, index) => (
            <td className='pl-6' key={index}>
              {row[key]}
            </td>
          ))}
          <td>
            <div className='flex gap-4'>
              <Button variant='secondary' pill onClick={updateButton}>
                Edit
              </Button>
              <Button variant='danger' pill onClick={deleteButton}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
