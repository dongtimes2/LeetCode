function maxProduct(nums: number[]): number {
  const arr = nums.sort((a, b) => b - a);
  
  return (arr[0] - 1) * (arr[1] - 1);
};