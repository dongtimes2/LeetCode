function subsetXORSum(nums: number[]): number {
  let result = 0;
  
  const dfs = (idx, value) => {
    if (idx === nums.length) {
      result += value;
    } else {
      dfs(idx + 1, value);
      dfs(idx + 1, value ^ nums[idx]);
    }
  };
  
  dfs(0, 0);
  
  return result;
};