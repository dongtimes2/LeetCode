function numSpecial(mat: number[][]): number {
  let result = 0;
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++){
      if (mat[i][j] === 1) {
        let rowFlag = true;
        let colFlag = true;
        
        for (let I = 0; I < mat.length; I++) {
          if (I !== i && mat[I][j] === 1) {
            rowFlag = false;
          }
        }
        
        for (let J = 0; J < mat[0].length; J++) {
          if (J !== j && mat[i][J] === 1) {
            colFlag = false;
          }
        }
        
        if (rowFlag && colFlag) {
          result++;
        }
      }
    }
  }
  
  return result;
};