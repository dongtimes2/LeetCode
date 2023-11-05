function decompressRLElist(nums: number[]): number[] {
  const result = [];
  
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    
    result.push(...Array(freq).fill(val));
  }
  
  return result;
};