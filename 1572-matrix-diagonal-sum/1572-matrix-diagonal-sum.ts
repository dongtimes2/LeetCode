function diagonalSum(mat: number[][]): number {
  const isEven = mat.length % 2 === 0;
  const middle = Math.floor(mat.length / 2);
  let result = 0;
  
  if (isEven) {
    for (let i = 0; i < mat.length; i++) {
      result += mat[i][i];
      result += mat[i][mat.length - 1 - i];
    }
  } else {
    for (let i = 0; i < mat.length; i++) {
      result += mat[i][i];
      
      if (i !== middle) {
        result += mat[i][mat.length - 1 - i];
      }
    }
  }
  
  return result;
};