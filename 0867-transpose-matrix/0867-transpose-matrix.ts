function transpose(matrix: number[][]): number[][] {
  const i = matrix.length;
  const j = matrix[0].length;
  const result = Array.from(Array(j), () => Array(i).fill(0));
  
  for (let n = 0; n < i; n++) {
    for (let m = 0; m < j; m++) {
      result[m][n] = matrix[n][m];
    }
  }
  
  return result;
};