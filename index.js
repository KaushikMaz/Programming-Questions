// Find a digit in a specific place in a number
function findDigitAtPlace(number, place) {
  // convert the number to a string to access its digits
  const numberString = number.toString();
  
  // calculate the index of the digit at the specified place
  const digitIndex = numberString.length - place;
  
  // extract the digit at the specified place
  const digit = numberString.charAt(digitIndex);
  
  return parseInt(digit); // convert the digit from a string to a number
}

// Example usage:
const number = 6783;
const place = 2;
const digit = findDigitAtPlace(number, place);
console.log(`The digit at the ${place}nd place in the number ${number} is ${digit}