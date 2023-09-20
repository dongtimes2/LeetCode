function threeSum(nums: number[]): number[][] {
  if (nums.length === 3) {
    const sum = nums[0] + nums[1] + nums[2];
    if (sum === 0) {
      return [nums];
    } else {
      return [];
    }
  }

  const target = nums.sort((a, b) => a - b);
  const map = new Map();

  for (let i = 0; i < target.length - 2; i++) {
    let j = i + 1;
    let k = target.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        if (!map.has(`${nums[i]}&${nums[j]}&${nums[k]}`)) {
          map.set(`${nums[i]}&${nums[j]}&${nums[k]}`, true);
        }

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      }

      if (sum < 0) {
        j++;
      }

      if (sum > 0) {
        k--;
      }
    }
  }

  const result = [];

  for (const data of map.keys()) {
    result.push(data.split('&').map(value => +value));
  }

  return result;
};