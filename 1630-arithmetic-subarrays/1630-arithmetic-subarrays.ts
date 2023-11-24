function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const result = [];
  
  const check = (arr) => {
    let result = true;
    const gap = Math.abs(arr[0] - arr[1]);
    
    for (let i = 2; i < arr.length; i++) {
      if (Math.abs(arr[i] - arr[i - 1]) !== gap) {
        result = false;
        break;
      }
    }
      
    return result;
  };
  
  for (let i = 0; i < l.length; i++) {
    const low = l[i];
    const high = r[i];
    const target = nums.slice(low, high + 1).sort((a, b) => a - b);
    
    result.push(check(target));  
  }
  
  return result;
};