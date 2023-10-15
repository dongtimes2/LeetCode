function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const result = [];
  
  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= max ? result.push(true) : result.push(false);
  }
    
  return result;
};