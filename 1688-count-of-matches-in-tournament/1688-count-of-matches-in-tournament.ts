function numberOfMatches(n: number): number {
  let result = 0;
  
  const match = (team) => {
    if (team <= 1) return;
    
    if (team % 2 === 0) {
      result += (team / 2);
      return match(team / 2);
    } else {
      result += ((team - 1) / 2);
      return match(((team - 1) / 2) + 1);
    }
  }
  
  match(n);
  
  return result;
};