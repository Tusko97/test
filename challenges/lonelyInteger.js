// Given an array of integers, where all elements but one occur twice, 
// Find the unique element.


// Function Description

// Complete the lonelyinteger function.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once


function lonelyInteger(a) {
    // Write your code here
let result = 0;
// Perform XOR operation on all elements in the array
for (let i = 0; i < a.length; i++){
    result ^= a[i];
}

return result;
}

// Example usage
const array = [1, 2, 3, 2, 1];
const uniqueElement = lonelyInteger(array);

console.log(uniqueElement); // Output: 3


// In the code above, the lonelyInteger function takes an array a as a parameter. It initializes the result variable to 0. 
// Then, it iterates over each element in the array and performs the XOR operation with the current element and the result variable.

// Since all elements occur twice except for the unique element, the XOR operation cancels out the duplicate elements, 
// leaving only the unique element in the result.

// By running this code, the output will be 3, which is the unique element in the given array [1, 2, 3, 2, 1].