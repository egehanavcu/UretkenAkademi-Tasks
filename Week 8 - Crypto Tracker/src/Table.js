import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        {...getTableProps()}
      >
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th scope="col" class="px-6 py-3" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <td class="px-6 py-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
