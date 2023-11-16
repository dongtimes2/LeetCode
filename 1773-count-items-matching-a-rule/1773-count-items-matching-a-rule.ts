function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let result = 0;
  
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      items[i][0] === ruleValue && result++;
    }
    
    if (ruleKey === "color") {
      items[i][1] === ruleValue && result++;
    }
    
    if (ruleKey === "name") {
      items[i][2] === ruleValue && result++;
    }
  }
  
  return result;
};