function countTestedDevices(batteryPercentages: number[]): number {
  let result = 0;
  
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i]) {
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        batteryPercentages[j] = Math.max(batteryPercentages[j] - 1, 0);
      }
      
      result++;
    } else {
      continue;
    }
  }
  
  return result;
};