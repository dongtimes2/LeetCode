function subtractProductAndSum(n: number): number {
  let sum = 0;
  let mul = 1;
  
  for (const num of n.toString()) {
    sum += Number(num);
    mul *= Number(num);
  }
  
  return mul - sum;
};