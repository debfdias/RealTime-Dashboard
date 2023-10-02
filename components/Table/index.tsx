const data = [
  {
    id: 5,
    user: "Charlie Brown",
    amount: "$76",
    date: "2023-09-24",
  },
  {
    id: 7,
    user: "Eva Green",
    amount: "$50",
    date: "2023-09-26",
  },
  {
    id: 8,
    user: "Dwitik Ghosh",
    amount: "$85",
    date: "2023-09-26",
  },
  {
    id: 9,
    user: "Michael Jackson",
    amount: "$195",
    date: "2023-09-26",
  },
]

interface TableProps {
  title: string
  columns: string[]
  rows: any[]
}

export default function TableComponent({ title, columns, rows }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-md md:text-xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-700">
          {title}
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            {columns.map((column: string) => (
              <th scope="col" className="px-6 py-3" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any) => (
            <>
              <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.user || row.name}
                </th>
                <td className="px-6 py-4">{row.amount || row.sales}</td>
                {row.date && <td className="px-6 py-4">{row.date}</td>}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
