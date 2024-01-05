function maximizeSum(nums: number[], k: number): number {
  let max = Math.max(...nums);
  let result = 0;
  
  for (let i = 0; i < k; i++) {
    result += max;
    max++;
  }
  
  return result;
};