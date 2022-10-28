function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  arr.forEach((row, index) => {
    firstDiagonal += row[index];
    secondDiagonal += row[row.length - index - 1];
  });

  return Math.abs(firstDiagonal - secondDiagonal);
}

console.log(diagonalDifference([[1, 2, 3],[2, 3, 5],[10,8,-12]]))
