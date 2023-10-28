function countPoints(points: number[][], queries: number[][]): number[] {
  const result = [];
  
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    
    for (let j = 0; j < points.length; j++) {
      const sum = Math.pow(points[j][0] - queries[i][0], 2) + Math.pow(points[j][1] - queries[i][1], 2);
      if (sum <= Math.pow(queries[i][2], 2)) count++;
    }
    
    result.push(count);
  }
  
  return result;
};