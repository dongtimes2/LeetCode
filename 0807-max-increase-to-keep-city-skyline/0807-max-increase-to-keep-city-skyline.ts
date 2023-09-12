function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const length = grid[0].length;
  const highRow = [];
  const highCol = [];
  const newGrid: number[][] = [];
  let result = 0;

  for (let i = 0; i < length; i++) {
    let max = -1;
    for (let j = 0; j < length; j++) {
      if (grid[i][j] > max) {
        max = grid[i][j];
      }
    }
    highRow.push(max);
  }

  for (let i = 0; i < length; i++) {
    let max = -1;
    for (let j = 0; j < length; j++) {
      if (grid[j][i] > max) {
        max = grid[j][i];
      }
    }
    highCol.push(max);
  }

  for (let i = 0; i < length; i++) {
    const data: number[] = [];
    for (let j = 0; j < length; j++) {
      const min = Math.min(highRow[i], highCol[j]);
      data.push(min);
    }
    newGrid.push(data);
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      result += newGrid[i][j] - grid[i][j];
    }
  }

  return result;
};