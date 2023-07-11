// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Function Description

// Complete the plusMinus function.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.


function plusMinus(arr) {
    // Write your code here
 let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Count the number of positive, negative, and zero elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const totalCount = arr.length;

  // Calculate the ratios
  const positiveRatio = positiveCount / totalCount;
  const negativeRatio = negativeCount / totalCount;
  const zeroRatio = zeroCount / totalCount;

  // Print the ratios with the desired decimal places
  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}