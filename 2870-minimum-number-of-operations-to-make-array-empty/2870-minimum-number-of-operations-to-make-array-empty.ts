function minOperations(nums: number[]): number {
  const data = new Map();
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (data.has(nums[i])) {
      data.set(nums[i], data.get(nums[i]) + 1);
    } else {
      data.set(nums[i], 1);
    }
  }
  
  console.log(data);
  
  for (const value of data.values()) {
    let count = 0;
    let low = Number.MAX_SAFE_INTEGER;
    
    while (true) {
      if (value < 3 * count) break;
      if ((value - 3 * count) % 2 === 0) {
        low = Math.min(low, count + (value - 3 * count) / 2);    
      }
      count++;
    }
    
    if (low === Number.MAX_SAFE_INTEGER) {
      result = -1;
      break;
    } else {
      result += low;
    }
  }
  
  return result;
};