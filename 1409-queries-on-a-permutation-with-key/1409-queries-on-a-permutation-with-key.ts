function processQueries(queries: number[], m: number): number[] {
  const p = [];
  const result = [];
  
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }
  
  for (let i = 0; i < queries.length; i++) {
    const pos = queries[i];
    
    for (let j = 0; j < p.length; j++) {
      const val = p[j];
      if (val === pos) {
        result.push(j);
        p.splice(j, 1);
        p.unshift(val);
      }
    }
  }
  
  return result;
};