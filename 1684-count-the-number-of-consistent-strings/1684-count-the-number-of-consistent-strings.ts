function countConsistentStrings(allowed: string, words: string[]): number {
  let result = 0;
  
  for (const word of words) {
    const targetList = [...new Set(word)];
    let check = true;
    
    for (const char of targetList) {
      if (allowed.indexOf(char) === -1) {
        check = false
        break;
      }
    }
    
    check && result++;
  }
  
  return result;
};