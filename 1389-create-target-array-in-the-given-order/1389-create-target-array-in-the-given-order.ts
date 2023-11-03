function createTargetArray(nums: number[], index: number[]): number[] {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const idx = index[i];
    
    result.splice(idx, 0, num);
    
  }
  
  return result;
};