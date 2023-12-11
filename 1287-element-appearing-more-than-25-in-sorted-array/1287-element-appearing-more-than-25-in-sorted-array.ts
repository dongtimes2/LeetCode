function findSpecialInteger(arr: number[]): number {
  const data = {};
  
  for (const num of arr) {
    if (data[num]) {
      data[num] += 1;
    } else {
      data[num] = 1;
    }
  }
  
  let max = -1;
  let result = -1;
  
  for (const [key, value] of Object.entries(data)) {
    if (Number(value) > max) {
      max = Number(value);
      result = Number(key);
    }
  } 
  
  return result;
};