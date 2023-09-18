function isValid(s: string): boolean {
  const stack = [];
  for (const word of s) {
    if (word === ')') {
      if (stack.pop() !== '(') return false;
    } else if (word === '}') {
      if (stack.pop() !== '{') return false;
    } else if (word === ']') {
      if (stack.pop() !== '[') return false;
    } else {
      stack.push(word);
    }
  }

  if (stack.length) return false;
  return true;
};
