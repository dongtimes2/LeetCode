function xorOperation(n: number, start: number): number {
  const arr = [];
  let result = 0;
  
  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i;
  }
  
  for (const num of arr) {
    result ^= num;
  }
  
  return result;
};