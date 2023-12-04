function largestGoodInteger(num: string): string {
  const data = [];
  
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      data.push(num[i] + num[i + 1] + num[i + 2]);    
    }
  }
  
  data.sort((a, b) => Number(b) - Number(a));
  
  return data[0] ?? ""
};