function minOperations(s: string): number {
  const length = s.length;
  const target1 = Array(length);
  const target2 = Array(length);
  let t1 = 0;
  let t2 = 0;
  
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      target1[i] = '0';
      target2[i] = '1';
    } else {
      target1[i] = '1';
      target2[i] = '0';
    }
  }
  
  for (let i = 0; i < length; i++) {
    if (s[i] !== target1[i]) {
      t1++;
    }
    
    if (s[i] !== target2[i]) {
      t2++;
    }
  }
  
  return Math.min(t1, t2);
};