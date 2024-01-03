function numberOfBeams(bank: string[]): number {
  let result = 0;
  
  for (let i = 0; i < bank.length - 1; i++) {
    const iCount = bank[i].split('').map((value) => +value).reduce((acc, cur) => acc + cur);
    if (iCount === 0) continue;
  
    for (let j = i + 1; j < bank.length; j++) {
      const jCount = bank[j].split('').map((value) => +value).reduce((acc, cur) => acc + cur);
      if (jCount === 0) {
        continue;
      } else {
        result += (iCount * jCount);
        break;
      }
    }
  }
  
  
  return result;
};