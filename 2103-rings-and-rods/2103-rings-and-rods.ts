function countPoints(rings: string): number {
  const map = new Map();
  let result = 0;
  
  for (let i = 0; i < rings.length -1; i += 2) {
    const idx = rings[i + 1];
    const color = rings[i];
    
    if (map.has(idx)) {
      const data = map.get(idx);
      data.add(color);
      map.set(idx, data);
    } else {
      map.set(idx, new Set(color));
    }
  }
  
  for (const data of map.values()) {
    if (data.size === 3) {
      result++;
    }
  }
  
  return result;
};