function pivotInteger(n: number): number {
  const front = new Map();
  const back = new Map();
  
  let accf = 0;
  let accb = 0;
  let result = -1;
  
  for (let i = 1; i <= n; i++) {
    accf += i;
    front.set(i, accf);
  }
  
  for (let i = n; i >= 1; i--) {
    accb += i;
    back.set(i, accb);
  }
  
  for (let i = 1; i <= n; i++) {
    if (front.get(i) === back.get(i)) {
      result = i;
      break;
    }
  }
  
  return result;
};