function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < nums1.length && idx2 < nums2.length) {
    if (nums1[idx1] <= nums2[idx2]) {
      mergedArray.push(nums1[idx1]);
      idx1++;
    } else {
      mergedArray.push(nums2[idx2]);
      idx2++;
    }
  }

  while (idx1 < nums1.length) {
    mergedArray.push(nums1[idx1]);
    idx1++;
  }

  while (idx2 < nums2.length) {
    mergedArray.push(nums2[idx2]);
    idx2++;
  }

  if (mergedArray.length % 2 === 0) {
    const medianIndex1 = mergedArray.length / 2;
    const medianIndex2 = medianIndex1 - 1;
    return (mergedArray[medianIndex1] + mergedArray[medianIndex2]) / 2;
  } else {
    const medianIndex = Math.floor(mergedArray.length / 2);
    return mergedArray[medianIndex];
  }
};
