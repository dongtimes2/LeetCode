function makeSmallestPalindrome(s: string): string {
  const result = Array(s.length);
  
  for (let i = 0; i <= Math.floor(s.length / 2); i++) {
    if (s[i] === s[s.length - i - 1]) {
      result[i] = s[i];
      result[s.length - i - 1] = s[s.length - i - 1];
    } else {
      if (s[i].charCodeAt(0) < s[s.length - i - 1].charCodeAt(0)) {
        result[i] = s[i];
        result[s.length - i - 1] = s[i];
      } else {
        result[i] = s[s.length - i - 1];
        result[s.length - i - 1] = s[s.length - i - 1];
      }
    }
  }
  
  return result.join('');
};