interface TableBodyProps {
  rows: string[] | number[]
}

export const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className='border-b border-white/10'>
          <td className='whitespace-nowrap px-6 py-4 font-medium'>{row}</td>
        </tr>
      ))}
    </tbody>
  )
}
