function makeEqual(words: string[]): boolean {
  if (words.length === 1) return true;
  const count = words.length;
  const data = Array(26).fill(0);
  let result = true;
  
  for (const word of words) {
    for (const char of word) {
      data[char.charCodeAt(0) - 97]++;
    }
  }
  

  
  for (let i = 0; i < data.length; i++) {
    if (data[i] % count !== 0) {
      result = false;
      break;
    }
  }

  return result;
};