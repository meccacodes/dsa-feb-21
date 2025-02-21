// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return -1.

// Ex: string = "abcdcaf"
// 1 The first non-repeating character is "b" and is found at index 1.

function firstNonRepeatingCharacter(string) {
    // Write your code here
    return -1;
};

// Test Cases
console.log(firstNonRepeatingCharacter("abcdcaf")); // 1
console.log(firstNonRepeatingCharacter("faadabcbbebdf")); // 6
console.log(firstNonRepeatingCharacter("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")); // -1