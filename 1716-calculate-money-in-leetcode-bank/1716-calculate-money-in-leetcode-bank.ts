function totalMoney(n: number): number {
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (Math.floor(i / 7) === 0) {
      result += i + 1;
    } else {
      result += (i % 7) + Math.floor(i / 7) + 1;
    }
  }

  return result;
};