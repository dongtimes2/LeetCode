function freqAlphabets(s: string): string {
  let idx = s.length - 1;
  const result = [];
  
  while (idx >= 0) {
    if (s[idx] === '#') {
      const char = 
       String.fromCharCode(Number(s[idx - 2] + s[idx - 1]) + 96)
      result.unshift(char);
      idx -= 3;
    } else {
      result.unshift(String.fromCharCode(Number(s[idx]) + 96));
      idx--;
    }
  }
  
  return result.join('');
};