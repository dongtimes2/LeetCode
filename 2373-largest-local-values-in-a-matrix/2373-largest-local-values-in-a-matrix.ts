function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const result = Array.from(Array(n - 2), () => Array(n - 2).fill(0));
  
  const find = (a, b) => {
    let max = -1;
    
    for (let i = a; i <= a + 2; i++) {
      for (let j = b; j <= b + 2; j++) {
        if (grid[i][j] > max) {
          max = grid[i][j];
        }
      }
    }
    
    return max;
  };
  
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      result[i][j] = find(i, j);
    }
  }
  
  return result;
};