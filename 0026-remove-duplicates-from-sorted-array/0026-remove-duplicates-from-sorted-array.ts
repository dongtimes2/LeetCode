function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 1;
  let k = 1;
  
  while (fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      nums[++slow] = nums[fast];
      k++
    }
  }
  
  return k;
};