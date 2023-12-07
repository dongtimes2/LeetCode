function largestOddNumber(num: string): string {
  let index = -1;

  for (let i = 0; i < num.length; i++) {
    if (Number(num[i]) % 2 !== 0) {
      index = i;
    }
  }

  if (index === -1) {
    return "";
  } else {
    return num.slice(0, index + 1);
  }
};
