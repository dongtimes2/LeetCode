function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return nums[0] > nums[1] ? nums[0] : nums[1];
  if (nums.length === 3) return nums[0] + nums[2] > nums[1] ? nums[0] + nums[2] : nums[1];
  
  let a = nums[0];
  let b = nums[1];
  let c = nums[0] + nums[2];
  
  for (let i = 3; i < nums.length; i++) {
    [a, b, c] = [b, c, Math.max(a, b) + nums[i]];
  }
  
  return Math.max(b, c);
};