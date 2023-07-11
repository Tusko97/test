// Given a square matrix, calculate the absolute difference between the sums of its diagonals.


// Function description

// Complete the  function.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;
    
    // Calculate the sums of the primary and secondary diagonals
    for (let i = 0; i < n; i++){
        primarySum += arr[i][i];
        secondarySum += arr[i][n- i - 1];
    }
    
    // Calculate the absolute difference between the sums
    const difference = Math.abs(primarySum - secondarySum);
    
    return difference

}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  const absDifference = diagonalDifference(matrix);
  
  console.log(absDifference); // Output: 2

//   In the code above, the diagonalDifference function takes a square matrix arr as a parameter. 
// It initializes primarySum and secondarySum to 0. Then, it iterates over the elements of the matrix, 
// summing up the values on the primary diagonal (elements where the row index equals the column index) and 
// the secondary diagonal (elements where the row index plus the column index equals n - 1, where n is the number of rows/columns in the matrix).

// After calculating the sums of the diagonals, it calculates the absolute difference between the two sums using Math.abs(). Finally, it returns the difference.

// By running this code with the example matrix provided, the output will be 2, which is the absolute difference between the sums of the diagonals.