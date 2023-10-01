function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

  1- Define a function called isPalindrome that takes one parameter, word.
  2-Initialize a variable startIndex to 0.
  3-Initialize a variable endIndex to the length of word minus 1.
  4-Iterate while startIndex is less than the length of word divided by 2:
    . Inside the loop, compare the character at word[startIndex] with the character at word[endIndex].
    . If they do not match, return false immediately, indicating that word is not a palindrome.
    . Increment startIndex by 1 and decrement endIndex by 1 to move towards the middle of the word.
  5-If the loop completes without returning false, it means that all pairs of characters from the beginning and end of the word match, which confirms that the word is a palindrome. In this case, return true.

*/

/*
  Add written explanation of your solution here

- The isPalindrome function takes one parameter, word, which represents the word to be checked.

- Two variables, startIndex and endIndex, are initialized. startIndex starts at 0 (the index of the first character in word), and endIndex starts at the index of the last character in word. These indices are used to compare characters from both ends of the word.

- The code enters a loop that continues as long as startIndex is less than half the length of the word (i.e., until it reaches the middle of the word).

- Inside the loop, the code compares the character at word[startIndex] with the character at word[endIndex]. If these characters do not match, the code immediately returns false, indicating that the word is not a palindrome. This is an efficient approach because it stops as soon as a mismatch is found.

- If the loop completes without returning false, it means that all pairs of characters from the beginning and end of the word match. In this case, the function returns true, confirming that the word is a palindrome.

- This solution is efficient as it only needs to iterate through half of the characters in the word, and it doesn't require creating additional strings or arrays, which reduces space complexity. It's a straightforward and optimal algorithm for checking palindromes.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
}

module.exports = isPalindrome;












