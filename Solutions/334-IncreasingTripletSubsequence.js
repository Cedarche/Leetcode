// 334. Increasing Triplet Subsequence
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and
// nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.

// [20,100,10,12,5,13]
// True because (2, 3, 5) is a triplet (10, 12, 13)

let nums = [20, 100, 10, 12, 5, 13];
// let nums = [1, 2, 3, 4, 5];

var increasingTriplet = function (nums) {
  let firstNum = Infinity; //10
  let secondNum = Infinity; //12

  for (let current of nums) {
    // If the third is smaller than the first variable then make first = third...
    if (current < firstNum) {
      firstNum = current;
      // If the third is in between the first and second then move second to third place...
    } else if (current < secondNum && current > firstNum) {
      secondNum = current;
    } // If the right is greater than the first and second then return true...
    else if (current > secondNum && current > firstNum) {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet(nums));

