// Comparison Sorting
// Quicksort usually has a running time of , but is there an algorithm that can sort even faster? 
// In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. 
// A comparison sort algorithm cannot beat  (worst-case) running time, since  represents the minimum number of comparisons needed to know where to place each element.

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. 
// Instead, you create an integer array whose index range covers the entire range of values in your array to sort. 
// Each time a value occurs in the original array, you increment the counter at that index. 
// At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Example
// arr = [1, 1, 3, 2, 1]

// All of the values are in the range[0...3] , so create an array of zeros, result = [0, 0, 0, 0] . The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]
// The frequency array is[0, 3, 1, 1]. These values can be used to create the sorted array as well:sorted = [1, 1, 1, 2, 3] .

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers
// Returns

// int[100]: a frequency array

function countingSort(arr) {
    const frequency = new Array(100).fill(0);
  
    // Count the occurrences of each value
    for (let i = 0; i < arr.length; i++) {
      frequency[arr[i]]++;
    }
  
    return frequency;
  }
  
  // Example usage
  const array = [1, 4, 2, 3, 2, 1, 4, 4];
  const frequencyArray = countingSort(array);
  
  console.log(frequencyArray); // Output: [0, 2, 2, 1, 3, 0, ..., 0]





// In the code above, the countingSort function takes an array arr as a parameter. It initializes a new array frequency with a length of 100, filled with zeros. 
// This frequency array will store the count of occurrences for each value in the range of 0 to 99 (assuming values in the input array are within this range).

// Then, it iterates over the elements of the input array and increments the corresponding index in the frequency array to count the occurrences of each value.

// Finally, it returns the frequency array, which represents the count of occurrences for each value.

// By running this code with the example input array [1, 4, 2, 3, 2, 1, 4, 4], the output will be [0, 2, 2, 1, 3, 0, ..., 0],
// indicating the count of occurrences for each value in the input array. 
// Note that the frequency array is 0-based, so the count for value 0 will be at index 0, the count for value 1 will be at index 1, and so on.