interface TableBodyProps {
  rows: any[]
}

export const TableBody = ({ rows }: TableBodyProps) => {
  console.log('rows', rows)
  return (
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {Object.keys(row).map((key, index) => (
            <td key={index}>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
