function pivotArray(nums: number[], pivot: number): number[] {
  const left = [];
  const mid = [];
  const right = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) left.push(nums[i]);
    if (nums[i] === pivot) mid.push(nums[i]);
    if (nums[i] > pivot) right.push(nums[i]);
  }
  
  return [...left, ...mid, ...right];
};