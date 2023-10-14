function isStrictlyPalindromic(n: number): boolean {
  let result = true;
  
  outer: for (let i = 2; i <= n - 2; i++) {
    const target = n.toString(i);
    
    for (let j = 0; j < Math.floor(target.length / 2); j++) {
      if (target[j] !== target[target.length - 1 - j]) {
        result = false;
        break outer;
      }
    }
  }
  
  return result;
};