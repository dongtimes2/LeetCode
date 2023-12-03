function minTimeToVisitAllPoints(points: number[][]): number {
  let result = 0;
  
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    
    result += Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]));
  }
  
  return result;
};