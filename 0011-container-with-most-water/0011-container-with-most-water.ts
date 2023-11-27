function maxArea(height: number[]): number {
  let low = 0;
  let high = height.length - 1;
  let result = 0;
  
  while (low < high) {
    const area = Math.abs(low - high) * Math.min(height[low], height[high]);
    
    if (area > result) {
      result = area;
    }
    
    console.log(low, high, area);
    
    if (height[low] <= height[high]) {
      low++;
    } else {
      high--;
    }
  }
  
  return result;
};