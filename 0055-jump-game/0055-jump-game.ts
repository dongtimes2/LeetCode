function canJump(nums: number[]): boolean {
  let j = nums.length - 1;
  
  for (let i = nums.length - 2; i >= 0; i--) {
    if (j - i <= nums[i]) {
      j = i;
    }
  }
  
  if (j === 0) {
    return true;
  } else {
    return false;
  }
};