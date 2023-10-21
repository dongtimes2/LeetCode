function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const sum = i.toString(2).split('').map(num => +num).reduce((acc, cur) => acc + cur);
    
    if (sum === k) result += nums[i];
  }
  
  return result;
};