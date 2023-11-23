function differenceOfSum(nums: number[]): number {
  const elementSum = nums.reduce((acc, cur) => acc + cur);
  const digitSum = nums.map(num => num.toString().split('')).flat().map(num => +num).reduce((acc, cur) => acc + cur);
  
  return Math.abs(elementSum - digitSum);
};