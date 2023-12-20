function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return j;
};