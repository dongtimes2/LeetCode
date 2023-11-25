function sumCounts(nums: number[]): number {
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums.length && (i + j) <= nums.length; j++) {
      result += Math.pow([...new Set(nums.slice(i, i + j))].length, 2);
    }
  }
  
  return result;
};