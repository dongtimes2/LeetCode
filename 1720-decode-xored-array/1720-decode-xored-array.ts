function decode(encoded: number[], first: number): number[] {
  const result = [first];
  
  for (let i = 0; i < encoded.length; i++) {
    result.push(result[i] ^ encoded[i]);
  }
  
  return result;
};