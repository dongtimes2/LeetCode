function sumOfMultiples(n: number): number {
  const target = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      target.push(i);
    }
  }
  
  return target.reduce((acc, cur) => acc + cur, 0);
};