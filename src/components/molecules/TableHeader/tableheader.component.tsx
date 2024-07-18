import { TableHeaderProps } from './tableheader.interface'

export const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
      <tr>
        {columns.map((column, index) => (
          <th key={index} scope='col' className='px-6 py-4'>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  )
}
