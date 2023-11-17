function maxWidthOfVerticalArea(points: number[][]): number {
  const x = [];
  let result = 0;
  
  for (let i = 0;  i < points.length; i++) {
    x.push(points[i][0]); 
  }
  
  x.sort((a, b) => a - b);
  
  for (let i = 0; i < x.length - 1; i++) {
    result = x[i + 1] - x[i] > result ? x[i + 1] - x[i] : result;
  }
  
  return result;
};