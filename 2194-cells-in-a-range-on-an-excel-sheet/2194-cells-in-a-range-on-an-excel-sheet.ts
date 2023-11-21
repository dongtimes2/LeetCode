function cellsInRange(s: string): string[] {
  const target = s.split(':');
  const rowStart = Number(target[0][1]);
  const rowEnd = Number(target[1][1]);
  const colStart = target[0][0].charCodeAt(0);
  const colEnd = target[1][0].charCodeAt(0);
  const result = [];
  
  for (let i = colStart; i <= colEnd; i++) {
    for (let j = rowStart; j <= rowEnd; j++) {
      const word = String.fromCharCode(i) + j;
      result.push(word);        
    }
  }
  
  return result;
};