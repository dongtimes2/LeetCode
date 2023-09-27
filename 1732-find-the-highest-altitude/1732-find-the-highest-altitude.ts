function largestAltitude(gain: number[]): number {
  const result = [0];
  
  for (let i = 1; i <= gain.length; i++) {
    result[i] = gain[i - 1] + result[i - 1];
  }
  
  return Math.max(...result);
};