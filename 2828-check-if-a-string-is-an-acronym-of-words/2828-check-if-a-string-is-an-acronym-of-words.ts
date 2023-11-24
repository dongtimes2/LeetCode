function isAcronym(words: string[], s: string): boolean {
  let target = '';
  
  for (const word of words) {
    target += word[0];
  }
  
  return target === s;
};