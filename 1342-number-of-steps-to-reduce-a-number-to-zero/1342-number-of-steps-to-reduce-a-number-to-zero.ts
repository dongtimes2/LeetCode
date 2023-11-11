function numberOfSteps(num: number): number {
  let result = 0;
  let target = num;
  
  while (true) {
    if (target === 0) break;
    
    if (target % 2 === 0) {
      target /= 2;
    } else {
      target--;
    }
    
    result++;
  }
  
  
  return result;
};