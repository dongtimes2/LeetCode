function findWordsContaining(words: string[], x: string): number[] {
  const result = [];
  
  for (let i = 0;  i < words.length; i++) {
    words[i].includes(x) && result.push(i) 
  }
  
  return result;
};