// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. 
// Given a list of numbers with an odd number of elements, find the median? 

// Complete the findMedian function. 
// it has the following parameter(s):
//  int arr[n]: an unsorted array of integers 
// returns 
// int: the median of the array

// To find the median of an unsorted array of integers, you can follow these steps:

// Sort the array in ascending order.
// Determine the index of the middle element by dividing the length of the array by 2 and rounding down.
// Return the value at the middle index.
// Here's the JavaScript code to implement the findMedian function:


function findMedian(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Determine the index of the middle element
  const middleIndex = Math.floor(arr.length / 2);

  // Return the value at the middle index
  return arr[middleIndex];
}

// Example usage:
const arr = [5, 2, 9, 1, 7, 6, 3];
console.log(findMedian(arr)); // Output: 5