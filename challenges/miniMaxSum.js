// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Complete the miniMaxSum function.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.


function miniMaxSum(arr) {
    // Write your code here
    // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;

  // Calculate the minimum sum by summing the first four elements
  for (let i = 0; i < 4; i++) {
    minSum += arr[i];
  }

  // Calculate the maximum sum by summing the last four elements
  for (let i = 1; i < 5; i++) {
    maxSum += arr[i];
  }

  // Print the minimum and maximum sums
  console.log(minSum + " " + maxSum);

}