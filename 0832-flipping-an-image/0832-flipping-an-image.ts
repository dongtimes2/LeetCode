function flip(image: number[]) {
  for (let i = 0; i < Math.floor(image.length / 2); i++) {
    const temp = image[i];
    image[i] = image[image.length - 1 - i];
    image[image.length - 1 - i] = temp;
  }
  
  return image;
}

function invert(image: number[]) {
  for (let i = 0; i < image.length; i++) {
    if (image[i] === 0) {
      image[i] = 1;
    } else {
      image[i] = 0;
    }
  }
  
  return image;
}

function flipAndInvertImage(image: number[][]): number[][] {
  const result = [];
  
  for (let i = 0; i < image.length; i++) {
    
    result.push(invert(flip(image[i])));
  }
  
  return result;
};