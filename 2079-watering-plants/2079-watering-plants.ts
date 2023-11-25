function wateringPlants(plants: number[], capacity: number): number {
  let result = 0;
  let cap = capacity;
  
  for (let i = 0; i < plants.length; i++) {
    result++;
    
    if (plants[i] <= cap) {
      cap -= plants[i];
    } else {
      result += (2 * i);
      cap = capacity;
      cap -= plants[i];
    }
  }
  
  return result;
};