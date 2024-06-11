const Table = ({ col, data }) => {
    return (
      <div>
        <table className="w-full p-2 m-4 border border-gray-300 rounded-lg">
          <thead className="bg-cyan-100 text-black">
            <tr>
              {col.map((name, index) => (
                <th key={index} className="p-2 text-left">
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-gray-300">
                {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 text-left">
                  {cell}
                </td>
              ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;