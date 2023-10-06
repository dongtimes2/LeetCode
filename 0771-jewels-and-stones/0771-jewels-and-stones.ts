function numJewelsInStones(jewels: string, stones: string): number {
  let result = 0;
  
  for (const char of jewels) {
    result += stones.split('').filter(val => val === char).length;
  }
  
  return result;
};