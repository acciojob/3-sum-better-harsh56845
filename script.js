function threeSum(S, target) {
// write your code here
	 S.sort((a, b) => a - b);

  // Initialize the minimum difference to infinity.
  let minDiff = Infinity;
  let minSum = 0;

  // Iterate over all pairs of elements in the array.
  for (let i = 0; i < S.length - 2; i++) {
    for (let j = i + 1; j < S.length - 1; j++) {
      // Find the third element that makes the sum closest to the target.
      let k = S.indexOf(target - S[i] - S[j]);

      // If the third element is found, update the minimum difference and minimum sum.
      if (k >= 0) {
        let diff = Math.abs(target - S[i] - S[j] - S[k]);
        if (diff < minDiff) {
          minDiff = diff;
          minSum = S[i] + S[j] + S[k];
        }
      }
    }
  }

  // Return the minimum sum.
  return minSum;
  
}

module.exports = threeSum;
