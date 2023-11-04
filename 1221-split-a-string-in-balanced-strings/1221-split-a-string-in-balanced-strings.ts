function balancedStringSplit(s: string): number {
  let lcount = 0;
  let rcount = 0;
  let result = 0;
  
  for (const char of s) {
    if (char === "L") {
      lcount++;
    } else {
      rcount++;
    }
    
    if (lcount === rcount) {
      result++;
      lcount = 0;
      rcount = 0;
    }
  }
  
  return result;
};