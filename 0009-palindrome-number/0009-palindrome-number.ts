function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const target = x.toString().split("");
  const reverse = x.toString().split("").reverse();

  for (let i = 0; i < target.length; i++) {
    if (target[i] !== reverse[i]) return false;
  }
  
  return true;
};