function mostWordsFound(sentences: string[]): number {
  let result = 0;
  
  for (const sentence of sentences) {
    const length = sentence.split(" ").length;
    
    result = length > result ? length : result;
  }
  
  
  return result;
};