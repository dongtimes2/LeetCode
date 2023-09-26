function finalString(s: string): string {
  let result = "";
  
  for (const char of s) {
    if (char === 'i') {
      result = result.split('').reverse().join('');
    } else {
      result += char;
    }
  }
  
  return result;
};