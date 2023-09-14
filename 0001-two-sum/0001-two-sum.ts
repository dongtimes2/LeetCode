function twoSum(nums: number[], target: number): number[] {
  const cache = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      return [cache[nums[i]], i];
    } else {
      cache[target - nums[i]] = i;
    }
  }
  
  console.log(cache)
};