const gcd = (a: number, b: number) => {
  const [n, m] = a > b ? [a, b] : [b, a];
  
  if (n % m === 0) {
    return m;
  } else {
    return gcd(m, n % m);
  }
}

function smallestEvenMultiple(n: number): number {
  return (n * 2) / gcd(n, 2);  
};