function minPartitions(n: string): number {
  let result = 0;
  
  for (const num of n) {
    if (Number(num) > result) {
      result = Number(num);
    }
  }
  
  return result;
};