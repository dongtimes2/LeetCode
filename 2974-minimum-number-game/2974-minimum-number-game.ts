function numberGame(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const result = [];
  
  while (nums.length) {
    const temp = nums.shift();
    result.push(nums.shift());
    result.push(temp);
  }
  
  return result;
};