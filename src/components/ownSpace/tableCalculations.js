export function solve(tableData) {
  let stringified = JSON.stringify(tableData);
  let copiedTableData = JSON.parse(stringified);
  console.log("start", JSON.stringify(copiedTableData));

  let rows = copiedTableData.length;
  let cols = copiedTableData[0].length;
  let vars = Math.min(rows, cols);

  for (let i = 0; i < vars; i++) {
    const soughtVar = copiedTableData[i][i];
    for (let x = 0; x < cols; x++) {
      copiedTableData[i][x] /= soughtVar;
    }
    const newSoughtVar = copiedTableData[i][i];
    for (let j = 0; j < rows; j++) {
      if (j === i) {
        continue;
      }
      const coefficient = copiedTableData[j][i] / newSoughtVar;
      for (let k = 0; k < cols; k++) {
        copiedTableData[j][k] -= coefficient * copiedTableData[i][k];
      }
    }
  }

  console.log("end", JSON.stringify(copiedTableData));
  let result = copiedTableData.map(row => row[cols - 1].toFixed(2).toString() + " ")
  return result;
}
