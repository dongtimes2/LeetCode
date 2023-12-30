function maxLengthBetweenEqualCharacters(s: string): number {
  const data = {};
  let maxlen = -1;
  
  for (let i = 0; i < s.length; i++) {
    if (data[s[i]]) {
      data[s[i]].push(i);
    } else {
      data[s[i]] = [i];
    }
  }
  
  for (const char in data) {
    if (data[char].length >= 2) {
      maxlen = Math.max(data[char][data[char].length - 1] - data[char][0] - 1, maxlen);
    }  
  }
  
  return maxlen;
};