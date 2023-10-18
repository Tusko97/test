// HackerLand University has the following grading policy:
//     • Every student receives a  gradein the inclusive range from 0 to  100.
//     • Any  grade less than  40 is a failing grade.
// Sam is a professor at the university and likes to round each student's  grade according to these rules:
//     • If the difference between the  grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//     • If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
//     • Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
// Function Description
// Complete the function gradingStudents in the editor below.
// gradingStudents has the following parameter(s):
//     • int grades[n]: the grades before rounding
// Returns
//     • int[n]: the grades after rounding as appropriate
// Input Format
// The first line contains a single integer, n, the number of students.
// Each line i of the n subsequent lines contains a single integer, grades[1].


function gradingStudents(grades) {
    // Write your code here
 const roundedGrades = grades.map(grade => {
        if (grade < 38) {
            return grade; // No rounding needed for failing grades.
        }
        
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        if (nextMultipleOf5 - grade < 3) {
            return nextMultipleOf5; // Round up to the next multiple of 5.
        } else {
            return grade; // No rounding needed.
        }
    });

    return roundedGrades;
}

// Example usage:
const studentGrades = [73, 67, 38, 33];
const roundedGrades = gradingStudents(studentGrades);
console.log(roundedGrades); // This will print the rounded grades to the console