function reverseWords(s: string): string {
  const result = [];
  const target = s.split(' ');
  
  for (const str of target) {
    result.push(str.split('').reverse().join(''));
  }
  
  return result.join(' ');
};