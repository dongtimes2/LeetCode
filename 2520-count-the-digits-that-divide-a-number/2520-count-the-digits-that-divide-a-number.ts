function countDigits(num: number): number {
  const data = [];
  let result = 0;
  
  num.toString().split('').map(digit => +digit).forEach(digit => data.push(digit));
  
  for (let digit of data) {
    if (num % digit === 0) result++;
  }

  return result;
};