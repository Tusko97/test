// Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
// if i is a multiple of both 3 and 5, print Fizzbuzz, if i is multiple of 3 (but not 5), print Fizz, 
// if i is a multiple of 5 (but not 3), print Buzz, if i is a not a multiple of 3 or 5, print the value of 1. 


//Complete the function fizzBuzz.


// fizzBuzz has the following parameter(s): int n: upper limit of values to test(inclusive) Returns: NONE.  
// Prints: The function must print the appropriate response for each value i in the set {1, 2, ... n} in ascending order, each on a spearate line

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      let output = '';
  
      if (i % 3 === 0) {
        output += 'Fizz';
      }
      if (i % 5 === 0) {
        output += 'Buzz';
      }
  
      console.log(output || i);
    }
  }