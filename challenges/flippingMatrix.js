// Sean invented a game involving a 2n * 2n matrix where each cell of the matrix contains an integer. 
// He can reverse any of its rows or columns any number of times. 
// The goal of the game is to maximise  the sum of the elements in the n * n submatrix located in the upper-left quadrant of the matrix. 
// Given the initial configurations for q matrices, 
// help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal. 
// Complete the flippingMatrix function. 
// it has the following parameters; 
// int matrix [2n][2n]; a 2-dimensional array of integers. 
// returns: 
// int: the maximum sum possible.

// To maximize the sum of the elements in the upper-left quadrant of the matrix, you can follow these steps:

// Initialize a variable maxSum to 0.
// Iterate over the upper-left quadrant of the matrix, i.e., from row 0 to n-1 and column 0 to n-1.
// For each element at row i and column j, 
// find the corresponding element in the opposite row and column, i.e., row i and column 2n-1-j, row 2n-1-i and column j, and row 2n-1-i and column 2n-1-j.
// Calculate the maximum value among these four elements and add it to maxSum.
// Return maxSum.

function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let maxSum = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const element1 = matrix[i][j];
        const element2 = matrix[i][2 * n - 1 - j];
        const element3 = matrix[2 * n - 1 - i][j];
        const element4 = matrix[2 * n - 1 - i][2 * n - 1 - j];
  
        const maxElement = Math.max(element1, element2, element3, element4);
        maxSum += maxElement;
      }
    }
  
    return maxSum;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  console.log(flippingMatrix(matrix)); // Output: 56
