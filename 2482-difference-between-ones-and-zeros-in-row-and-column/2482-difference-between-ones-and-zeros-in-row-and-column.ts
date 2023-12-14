function onesMinusZeros(grid: number[][]): number[][] {
  const result = Array.from(Array(grid.length), () => Array(grid[0].length).fill(0));
  
  const row0 = Array(grid.length).fill(0);
  const row1 = Array(grid.length).fill(0);
  const col0 = Array(grid[0].length).fill(0);
  const col1 = Array(grid[0].length).fill(0);
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        row0[i]++;
        col0[j]++;
      } else {
        row1[i]++;
        col1[j]++;
      }
    }
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      result[i][j] = row1[i] + col1[j] - row0[i] - col0[j];
    }
  }
  
  return result;
};