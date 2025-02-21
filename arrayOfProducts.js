// Write a function that takes in a non-empty array of intergers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value as output[i] is equal to the product of every number in the input array other than input[i]

// Note that you're expected to solve this problem without using division and without mutating the original array.


function arrayOfProducts(array) {
    // Write your code here.
}

const array1 = [5, 1, 4, 2];
const array2 = [1, 2, 3, 4, 5, 6];
const array3 = [35, 24, 23, 82];


arrayOfProducts(array1); // Output: [8, 40, 10, 20] 
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 X 4 X 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

arrayOfProducts(array2); // Output: [720, 360, 240, 180, 144, 120]

arrayOfProducts(array3); // Output: [45264, 66010, 68880, 19320]
