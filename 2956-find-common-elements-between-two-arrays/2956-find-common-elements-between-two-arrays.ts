function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set();
  const set2 = new Set();
  const result = [];
  
  for (const val of nums1) {
    if (set1.has(val)) {
      continue;
    } else {
      set1.add(val);
    }
  }
  
  for (const val of nums2) {
    if (set2.has(val)) {
      continue;
    } else {
      set2.add(val);
    }
  }
  
  let cnt1 = 0;
  let cnt2 = 0;
  
  for (const val of nums1) {
    if (set2.has(val)) {
      cnt1++
    }
  }
  
  result.push(cnt1);
  
   for (const val of nums2) {
    if (set1.has(val)) {
      cnt2++
    }
  }
  
  result.push(cnt2);
  
  return result;
};