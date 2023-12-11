function groupAnagrams(strs: string[]): string[][] {
  const data = {};
  
  for (const str of strs) {
    const code = Array(26).fill(0);
    for (const char of str) {
      code[char.charCodeAt(0) - 97]++;
    }
    
    const key = code.join('#');
    if (data[key]) {
      data[key].push(str);
    } else {
      data[key] = [str];
    }
  }
  
  return Object.values(data);
};
