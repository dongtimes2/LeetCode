function maxCoins(piles: number[]): number {
  const data = piles.sort((a, b) => a - b);
  let result = 0;
  let startPtr = data.length / 3;
  
  while (data[startPtr]) {
    result += data[startPtr];
    startPtr += 2;
  }
  
  return result;
};