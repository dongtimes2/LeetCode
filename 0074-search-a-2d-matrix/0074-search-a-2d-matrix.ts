function searchMatrix(matrix: number[][], target: number): boolean {
  let result = false;
  
  const upperBound = (data) => {
    let low = 0;
    let high = data.length - 1;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      
      if (target < data[mid][0]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    
    return low;
  }
  
  
  const upperIndex = upperBound(matrix);
  
  const binarySearch = (data) => {
    let low = 0;
    let high = data?.length - 1;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      
      if (data[mid] === target) {
        result = true;
        return;
      } else if (data[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  
  binarySearch(matrix[upperIndex - 1]);
  
  return result;
};