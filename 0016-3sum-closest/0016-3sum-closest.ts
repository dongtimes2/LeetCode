function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];
  
  nums.sort((a, b) => a - b);
  
  let result = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    
    while (low < high) {
      const cache = nums[i] + nums[low] + nums[high];
      
      if (cache === target) return target;
      
      result = Math.abs(target - result) < Math.abs(target - cache) ? result : cache;
      
      if (cache < target) {
        low++;
      } else {
        high--;
      }
    }
  }
  
  return result;
};
