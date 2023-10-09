function groupThePeople(groupSizes: number[]): number[][] {
  const result = [];
  const cache = {};
  
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] === 1) {
      result.push([i]);
      continue;
    }
    
    
    if (cache[groupSizes[i]]) {
      cache[groupSizes[i]].push(i);
      if (cache[groupSizes[i]].length === groupSizes[i]) {
        result.push(cache[groupSizes[i]]);
        delete cache[groupSizes[i]];
      }
      
    } else {
      cache[groupSizes[i]] = [i];
    } 
  }
  
  return result;
};