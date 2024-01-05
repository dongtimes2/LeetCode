function lengthOfLIS(nums: number[]): number {
  const upper_bound = (arr, key) => {
    let low = 0;
    let high = arr.length - 1;
    let result = arr.length;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      
      if (arr[mid] >= key) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return result;
  }
  
  let result = [];
  result.push(nums[0]);
  
  for (let i = 1; i < nums.length; i++) {
    if (result[result.length - 1] < nums[i]) {
      result.push(nums[i]);
    } else {
      const idx = upper_bound(result, nums[i]);
      result[idx] = nums[i];
    }
  }
  
  return result.length;
};