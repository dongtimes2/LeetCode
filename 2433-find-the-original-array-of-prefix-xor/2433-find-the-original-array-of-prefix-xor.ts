function findArray(pref: number[]): number[] {
  const result = [];
  for (const [idx, val] of pref.entries()) {
    if (idx === 0) {
      result.push(val);
    } else {
      result.push(val ^ pref[idx - 1]);
    }
  }

  return result;
};