// 151. Reverse Words in a String
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

let s = "a good   example";

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = "";
  let arr = s.trim().split(" ").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      res += arr[i] + " ";
    }
  }
  return res.trim();
};

console.log(reverseWords(s));
