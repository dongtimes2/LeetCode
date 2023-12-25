function numDecodings(s: string): number {
  const arr = Array(s.length + 1).fill(0);
  arr[s.length] = 1;
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '0') continue;
    
    arr[i] = arr[i + 1];
    if (Number(s[i] + s[i + 1]) <= 26) {
      arr[i] += arr [i + 2];
    }
  }
  
  return arr[0];
};