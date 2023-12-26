function isValidSudoku(board: string[][]): boolean {
  let result = true;
  
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const square = new Set();
    
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (row.has(board[i][j])) {
          return false;
        } else {
          row.add(board[i][j]);
        } 
      }
      
      if (board[j][i] !== '.') {
        if (col.has(board[j][i])) {
          return false;
        } else {
          col.add(board[j][i]);
        } 
      }
      
      if (board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * Math.floor(i % 3) + Math.floor(j % 3)] !== '.') {
        if (square.has(board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * Math.floor(i % 3) + Math.floor(j % 3)])) {
          return false;
        } else {
          square.add(board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * Math.floor(i % 3) + Math.floor(j % 3)]);
        }
      }
    }
  }  
  
  return result;
};