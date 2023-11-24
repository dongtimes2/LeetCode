function checkIfPangram(sentence: string): boolean {
  const data = Array(26).fill(false);
  let result = true;
  
  for (const char of sentence) {
    data[char.charCodeAt(0) - 97] = true;
  }
  
  for (const bool of data) {
    if (!bool) {
      result = false;
      break;
    }
  }
    
  return result;
};