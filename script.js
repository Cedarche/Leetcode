// 1679. Max Number of K-Sum Pairs
// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

 

// Example 1:

// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.

let nums = [3,1,3,4,3];
let k = 5;

var maxOperations = function(nums, k) {
    let left = 0;
    let right = nums.length - 1

    console.log(nums[left] , nums[right])

    for(let i = 0; i<= right; i++){
        
    }
    
};

console.log(maxOperations(nums, k));
