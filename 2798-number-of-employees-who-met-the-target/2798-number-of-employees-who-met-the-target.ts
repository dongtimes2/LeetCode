function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  let result = 0;
  
  for (const hour of hours) {
    hour >= target && result++;
  }
  
  return result;
};