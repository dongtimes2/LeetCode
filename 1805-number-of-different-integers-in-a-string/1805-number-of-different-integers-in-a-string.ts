function numDifferentIntegers(word: string): number {
  let str = '';
  
  for (const char of word) {
    str += Number.isNaN(Number(char)) ? '#' : Number(char); 
  }
  
  const numArr = str.split('#').filter((value) => !!value).map((value) => BigInt(value));
  const set = new Set();
  
  for (const num of numArr) {
    if (set.has(num)) {
      continue;
    } else {
      set.add(num);
    }
  }
  
  return set.size;
};