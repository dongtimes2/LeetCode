function uniqueMorseRepresentations(words: string[]): number {
  const result = [];
  const data = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  for (const word of words) {
    let code = "";
    
    for (const char of word) {
      code += data[char.charCodeAt(0) - 97];
    }
    
    result.push(code);
  }
  
  return [...new Set(result)].length;
};