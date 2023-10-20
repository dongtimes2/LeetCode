function smallerNumbersThanCurrent(nums: number[]): number[] {
  const target = [...nums].sort((a, b) => a - b);
  const map = new Map();
  const result = [];
  
  for (let i = 0; i < target.length; i++) {
    if (!map.has(target[i])) {
      map.set(target[i], i);
    } 
  }
  
  for (let i = 0; i < nums.length; i++) {
    result.push(map.get(nums[i]));
  }
    
  return result;
};