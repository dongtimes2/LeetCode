function imageSmoother(img: number[][]): number[][] {
  const result = Array.from(Array(img.length), () => Array(img[0].length).fill(0));
  
  const calc = (a: number, b: number) => {
    let count = 0;
    let sum = 0;
    
    for (let i = a - 1; i <= a + 1; i++) {
      for (let j = b - 1; j <= b + 1; j++) {
        if (i >= 0 && j >= 0 && i < img.length && j < img[0].length) {
          count++;
          sum += img[i][j];
        }
      }
    }
    
    return Math.floor(sum / count);
  };
  
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      result[i][j] = calc(i, j);
    }
  }
  
  console.log(result);
  
  return result;
};