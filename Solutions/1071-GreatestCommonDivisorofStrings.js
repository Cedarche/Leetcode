// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

let word1 = "ABCABC";
let word2 = "ABC";

var gcdOfStrings = function (str1, str2) {
  const gcd = (a, b) => {
    while (b !== 0) {
      console.log(a, b);
      let temp = b;
      b = a % b;
      console.log("Remainder: ", b);
      a = temp;
    }
    return a;
  };

  if (str1 + str2 !== str2 + str1) {
    return ""; // If not, there is no common divisor
  }
  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
};

console.log(gcdOfStrings(word1, word2));
