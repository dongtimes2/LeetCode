function arithmeticTriplets(nums: number[], diff: number): number {
  let result = 0;
  const data = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    data.set(nums[i], i);
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (data.has(nums[i] + diff) && data.has(nums[i] + diff + diff)) {
      result++;
    }
  }
    
  return result;
};