function maxScore(s: string): number {
  let result = 0;
  
  for (let i = 0; i < s.length - 1; i++) {
    const left = s.substring(0, i + 1);
    const right = s.substring(i + 1);
    
    const lcnt = left.split('').filter((val) => val === '0').length;
    const rcnt = right.split('').filter((val) => val === '1').length;
    
    result = Math.max(result, lcnt + rcnt);
  }
  
  return result;
};