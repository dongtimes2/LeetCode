function findMatrix(nums: number[]): number[][] {
  const result = [];
  const data = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    if (!data.has(nums[i])) {
      data.set(nums[i], 1);
    } else {
      data.set(nums[i], data.get(nums[i]) + 1);
    } 
  }
  
  while (true) {
    const chunk = [];
    let pushed = false;
    
    for (const key of data.keys()) {
      if (data.get(key) > 0) {
        chunk.push(key);
        data.set(key, data.get(key) - 1);
        pushed = true;
      }
    }
    
    if (pushed) {
      result.push(chunk);
    } else {
      break;
    }
  }

  return result;
};