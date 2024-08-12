// Your code here
// src/utils.js

export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Input must be a string.");
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Input must only contain alphabetic characters.");
    }
  
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
  }
  
