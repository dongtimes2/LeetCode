function maximumNumberOfStringPairs(words: string[]): number {
  const map = new Map();
  let count = 0;
  
  for (const word of words) {
    if (map.has(word)) {
      count++;
    } else {
      map.set(word, true);
      map.set(word[1] + word[0], true);
    }   
  }
  
  return count;
};