import React, { useState } from "react";
import "./styles/CreateGameTable.css";

const Table = ({ rows, cols }) => {
  const [tableData, setTableData] = useState(new Array(rows).fill([]).map(() => new Array(cols).fill("")));
  const [numCols, setNumCols] = useState(cols);

  const addRow = () => {
    setTableData([...tableData, new Array(numCols).fill("")]);
  };

  const removeRow = () => {
    if (tableData.length > 1) {
      const updatedTableData = [...tableData];
      updatedTableData.pop();
      setTableData(updatedTableData);
    }
  };

  const addColumn = () => {
    setNumCols(numCols + 1);
    setTableData(tableData.map((row) => [...row, ""]));
  };

  const removeColumn = () => {
    if (numCols > 1) {
      setNumCols(numCols - 1);
      const updatedTableData = [...tableData];
      updatedTableData.forEach((row) => row.pop());
      setTableData(updatedTableData);
    }
  };

  const updateCellValue = (rowIndex, colIndex, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][colIndex] = value;
    setTableData(updatedTableData);
  };

  return (
    <div className={`table-container`}>
      <div className="table-scroll">
        <table>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input type="number" value={cell} onChange={(e) => updateCellValue(rowIndex, colIndex, e.target.value)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-buttons">
        <button onClick={addRow}>Add Row</button>
        <button onClick={removeRow}>Remove Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeColumn}>Remove Column</button>
      </div>
    </div>
  );
};

export default Table;
