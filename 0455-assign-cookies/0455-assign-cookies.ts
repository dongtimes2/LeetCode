function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  let result = 0;
  
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) {
        result++;
        s.splice(j, 1);
        break;
      }
    }
  }

  return result;
};