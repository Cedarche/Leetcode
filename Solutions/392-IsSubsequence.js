// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

let s = "ab";
let t = "baab";

var isSubsequence = function (s, t) {
  let count = 0;

  if (s.length > t.length) return false;

  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }

  return count === s.length;
};

console.log(isSubsequence(s, t));
