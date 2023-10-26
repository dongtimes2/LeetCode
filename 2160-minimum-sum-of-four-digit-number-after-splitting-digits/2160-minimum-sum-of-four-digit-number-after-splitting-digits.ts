function minimumSum(num: number): number {
  const arr = num.toString().split('').map(val => +val).sort((a, b) => a - b);
  const result = Number([arr[0], arr[2]].join('')) + Number([arr[1], arr[3]].join(''));
  
  return result;
};