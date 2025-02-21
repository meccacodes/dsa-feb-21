// Problem #1
// Palindrome Check
// Below are just two solutions
// There are many other ways to solve this problem, can you find another solution?


// Solution 1 - easy and readable, less efficient
function reverseStr(str) {
  const revStr = str.split("").reverse().join("");
  if (revStr === str) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

const pal1 = "astring";
const pal2 = "tacocat";


console.warn(`Palindrome Check Solution 1`);
console.log(`${pal1} is not a palindrome`);
reverseStr(pal1); // false
console.log(`${pal2} is a palindrome`);
reverseStr(pal2); // true


// Solution 2 - less readble, more efficient
function twoPoint(str) {
  let start = 0;
  let end = str.length - 1;
  for (i = 0; i < str.length - 1; i++) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

console.warn(`Palindrome Check Solution 2`);

console.log(`${pal1} is not a palindrome`);
twoPoint(pal1); // false

console.log(`${pal2} is a palindrome`);
twoPoint(pal2); // true



// ________________________________________________________________________
// Problem #2
// First Non-Repeating Character
// This solution is not efficient, is there another way to solve this?  Hint: search up 'hash table'
// Again, there are many ways to solve this, how many can you code up?


function firstNonRepeatingCharacter(str) {
  for (idx = 0; idx < str.length; idx++){
    let foundDuplicate = false;
    for(idx2 = 0; idx2 < str.length; idx2++) {
      if(str[idx] === str[idx2] && idx !== idx2) foundDuplicate = true;
    }
    if(!foundDuplicate) {
      console.log(`Non-repeating index = ${idx}`);
      return idx;}
  }
  console.log(`There are no non-repeating characters in this string`);
  return -1;
};


const nrcStr1 = "abcdcaf"; //Output: 1
// The first non-repeating character is "b" and is found at index 1.

const nrcStr2 = "abcdefgabcdefg"; // Output: -1
// There are no non-repeating characters in this string.

const nrcStr3 = "tacocat"; // Output: 3
// The first non-repeating character is "o" and is found at index 3.

console.warn(`First Non-Repeating Character Solution`);

console.log(`"${nrcStr1}":`)
firstNonRepeatingCharacter(nrcStr1);

console.log(`"${nrcStr2}":`)
firstNonRepeatingCharacter(nrcStr2);

console.log(`"${nrcStr3}":`)
firstNonRepeatingCharacter(nrcStr3);




// ________________________________________________________________________
// Problem #3
// Array of Products
// This is the "brute force" solution.
// Again there are many ways to solve this, how efficient can you make your solution?

function arrayOfProducts(array) {
  const products = [];

  for(i = 0; i < array.length; i++){
    let runningProduct = 1;
    for(j = 0; j < array.length; j++){
      if(i !== j){
        runningProduct *= array[j];
      }
      products[i] = runningProduct;
    }
  }
  console.log(products);
  return products;
}

const array1 = [5, 1, 4, 2];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [35, 24, 23, 82];

console.warn(`Array of Products Solution`);
console.log(`array1`);
arrayOfProducts(array1); // Output: [8, 40, 10, 20] 
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 X 4 X 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

console.log(`array2`);
arrayOfProducts(array2); // Output: [720, 360, 240, 180, 144, 120]

console.log(`array3`);
arrayOfProducts(array3); // Output: [45264, 66010, 68880, 19320]