// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

let nums = [-1, 1, 0, -3, 3];

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let answer = Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
};

// TOO SlOW
// var productExceptSelf = function (nums) {
//   let answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     let store = nums[i];
//     nums[i] = 1;
//     let sum = nums.reduce((total, num) => {
//       return total * num;
//     });
//     answer.push(sum);
//     nums[i] = store;
//   }

//   return answer;
// };

console.log(productExceptSelf(nums));
