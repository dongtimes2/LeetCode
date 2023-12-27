function minCost(colors: string, neededTime: number[]): number {
  let result = 0;
  for (let i = 0; i < colors.length - 1; i++) {
    if (colors[i] === colors[i + 1]) {
      result += Math.min(neededTime[i], neededTime[i + 1]);
      if (neededTime[i] > neededTime[i + 1]) {
        neededTime[i + 1] = neededTime[i];
      } else {
        neededTime[i] = neededTime[i + 1]; 
      }
    }
  }
  
  return result;
};
