function minBitFlips(start: number, goal: number): number {
  let startBit = start.toString(2);
  let goalBit = goal.toString(2);
  let result = 0;
  
  if (startBit.length > goalBit.length) {
    goalBit = goalBit.padStart(startBit.length, '0');
  } else {
    startBit = startBit.padStart(goalBit.length, '0');    
  }
  
  for (let i = 0; i < startBit.length; i++) {
    if (startBit[i] !== goalBit[i]) result++;
  }
  
  return result;
};
