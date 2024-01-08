function maxDepth(s: string): number {
  const stack = [];
  let max = 0;
  let level = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
      level++;
      max = Math.max(max, level);
    } else if (s[i] === ')') {
      stack.pop();
      level--;
    } 
  }
  
  return max;
};