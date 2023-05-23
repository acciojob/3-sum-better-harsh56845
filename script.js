function threeSum(nums, target) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        // If the sum is equal to the target, return the sum
        return sum;
      }

      // Update the closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increment left pointer for a larger element
      } else {
        right--; // Decrement right pointer for a smaller element
      }
    }
  }

  return closestSum;
}


module.exports = threeSum;
