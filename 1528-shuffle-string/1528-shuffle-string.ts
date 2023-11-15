function restoreString(s: string, indices: number[]): string {
  const data = {};
  let result = "";

  for (let i = 0; i < indices.length; i++) {
    data[indices[i]] = s[i];
  }

  for (let i = 0; i < indices.length; i++) {
    result += data[i];
  }

  return result;
};