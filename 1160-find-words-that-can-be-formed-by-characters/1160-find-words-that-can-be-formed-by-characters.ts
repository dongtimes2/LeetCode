function countCharacters(words: string[], chars: string): number {
  const data = Array(26).fill(0);
  let result = 0;
  
  for (const char of chars) {
    data[char.charCodeAt(0) - 97]++;
  }
  
  for (let i = 0; i < words.length; i++) {
    const target = [...data];
    let check = true;
    
    for (const word of words[i]) {
      if (target[word.charCodeAt(0) - 97] > 0) {
        target[word.charCodeAt(0) - 97]--;
      } else {
        check = false;
        break;
      }
    }
    
    if (check) {
      result += words[i].length;
    }    
  }

  
  return result;
};