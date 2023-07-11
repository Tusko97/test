// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function. 
// It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format

function timeConversion(s) {
    // Write your code here  
    // Parse the input string
  const hour = parseInt(s.slice(0, 2));
  const minute = parseInt(s.slice(3, 5));
  const second = parseInt(s.slice(6, 8));
  const period = s.slice(8, 10);

  let convertedHour = hour;

  // Adjust the hour based on the period (AM or PM)
  if (period === "PM" && hour !== 12) {
    convertedHour += 12;
  } else if (period === "AM" && hour === 12) {
    convertedHour -= 12;
  }

  // Construct the new time string in the 24-hour format
  const convertedTime = `${padZero(convertedHour)}:${padZero(minute)}:${padZero(second)}`;

  return convertedTime;
}

// Helper function to pad single-digit numbers with leading zeros
function padZero(number) {
  return number.toString().padStart(2, "0");
}
