function candy(ratings: number[]): number {
  const result1 = Array(ratings.length).fill(1);
  const result2 = Array(ratings.length).fill(1);
  const result3 = [];
  
  for (let i = 1; i < ratings.length - 1; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result1[i] = result1[i - 1] + 1;
    }
  }
  
  for (let i = ratings.length - 2; i > 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result2[i] = result2[i + 1] + 1;
    }
  }
  
  for (let i = 0; i < ratings.length; i++) {
    result3[i] = Math.max(result1[i], result2[i]);
  }
  
  if (ratings[0] > ratings[1]) {
    result3[0] = result3[1] + 1;
  }
  
  if (ratings[ratings.length -1] > ratings[ratings.length - 2]) {
    result3[ratings.length - 1] = result3[ratings.length - 2] + 1;
  }
  
  return result3.reduce((acc, cur) => acc + cur);
};

