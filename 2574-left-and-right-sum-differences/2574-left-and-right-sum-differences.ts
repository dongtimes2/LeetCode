function leftRightDifference(nums: number[]): number[] {
  const left = Array(nums.length).fill(0);
  const right = Array(nums.length).fill(0);
  const answer = [];
  
  for (let i = 0; i < nums.length - 1; i++) {
    left[i + 1] = left[i] + nums[i];
  }
  
  for (let i = nums.length - 1; i > 0; i--) {
    right[i - 1] = right[i] + nums[i];
  }
  
  for (let i = 0; i < nums.length; i++) {
    answer.push(Math.abs(left[i] - right[i]));
  }
  
  return answer;
};