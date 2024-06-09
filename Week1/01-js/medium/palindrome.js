/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/g, "");
  /*This line removes all characters from the string that are not letters(a - z) or digits(0 - 9).It uses a regular expression:

  [^a-z0-9] means "any character that is not a letter or a digit".
  The g flag at the end of the regular expression means "global", which makes the replacement for all matches in the string.
  The replace function then replaces these non-alphanumeric characters with an empty string (effectively removing them).
  */
  let reversedStr = str.split("").reverse().join("");
  return str == reversedStr;
}

module.exports = isPalindrome;
