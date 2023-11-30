function sortArray(nums: number[]): number[] {
   
  
  const sort = (arr) => {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const low = sort(arr.slice(0, mid));
    const high = sort(arr.slice(mid));
    
    return merge(low, high);
  }
  
  const merge = (arr1, arr2) => {
    const arr = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        arr.push(arr1[i]);
        i++
      } else {
        arr.push(arr2[j]);
        j++;
      }
    }
    
    while (i < arr1.length) {
      arr.push(arr1[i]);
      i++
    }
    
    while (j < arr2.length) {
      arr.push(arr2[j]);
      j++;
    }
    
    return arr;
  }
  
  return sort(nums);
};