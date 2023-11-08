function minOperations(boxes: string): number[] {
  const len = boxes.length;
  const result = Array(len).fill(0);
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (boxes[j] === "1") {
        result[i] += Math.abs(i - j);
      }
    }
  }
  
  return result;
};