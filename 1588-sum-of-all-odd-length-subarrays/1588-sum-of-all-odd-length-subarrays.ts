function sumOddLengthSubarrays(arr: number[]): number {
  let result = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length; j += 2) {
      const target = arr.slice(i, i + j);
      
      if (target.length === j) {
        result += target.reduce((acc, cur) => acc + cur);   
      }
    } 
  }
  
  return result;
};