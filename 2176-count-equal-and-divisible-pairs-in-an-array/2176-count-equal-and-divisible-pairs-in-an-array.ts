function countPairs(nums: number[], k: number): number {
  const map = new Map();
  let result = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const arr = map.get(nums[i]);
      arr.push(i);
      map.set(nums[i], arr);
    } else {
      map.set(nums[i], [i]);
    }
  }
  
  for (const arr of map.values()) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] * arr[j] % k === 0) {
          result++;
        }
      }
    }
  }
  
  return result;
};