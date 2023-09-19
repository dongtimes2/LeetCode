function differenceOfSums(n: number, m: number): number {
  const num1List = [];
  const num2List = [];

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
      num2List.push(i);
    } else {
      num1List.push(i);
    }
  }

  const num1 = num1List.length ? num1List.reduce((acc, cur) => acc + cur) : 0;
  const num2 = num2List.length ? num2List.reduce((acc, cur) => acc + cur) : 0;
  return num1 - num2;
};
