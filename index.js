// ===== Credit Card Validator : Luhn Algorithm ===== |

// Javascript program to implement Luhn algorithm
// site for later reference: https://www.30secondsofcode.org/js/p/1

const validCard = (num) => {
  let arr = (num + "")
    .split("")
    .reverse()
    .map((x) => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  );
  sum += lastDigit;
  return sum % 10 === 0;
};
console.log(validCard("1234567890123456")); // output: false
console.log(validCard(4408041234567893)); // output: true
console.log(validCard(38520000023237)); // output: true
console.log(validCard(4222222222222)); // output: true

// ================================================================ \\
// Other Solutions for Reference \\
// https://www.geeksforgeeks.org/program-credit-card-number-validation/

// JavaScript program to check if a given credit
// card is valid or not.

// Return this number if it is a single digit, otherwise,
// return the sum of the two digits
// function getDigit(number) {
//   if (number < 9) return number;
//   return Math.floor(number / 10) + (number % 10);
// }

// Return the number of digits in d
// function getSize(d) {
//   let num = d.toString();
//   return num.length;
// }

// // Return the first k number of digits from
// // number. If the number of digits in number
// // is less than k, return number.
// function getPrefix(number, k) {
//   if (getSize(number) > k) {
//     let num = number.toString();
//     return parseInt(num.substring(0, k));
//   }
//   return number;
// }

// // Return true if the digit d is a prefix for number
// function prefixMatched(number, d) {
//   return getPrefix(number, getSize(d)) == d;
// }

// // Get the result from Step 2
// function sumOfDoubleEvenPlace(number) {
//   let sum = 0;
//   let num = number.toString();
//   for (let i = getSize(number) - 2; i >= 0; i -= 2)
//     sum += getDigit((num.charCodeAt(i) - "0".charCodeAt(0)) * 2);

//   return sum;
// }

// // Return sum of odd-place digits in number
// function sumOfOddPlace(number) {
//   let sum = 0;
//   let num = number.toString();
//   for (let i = getSize(number) - 1; i >= 0; i -= 2)
//     sum += num.charCodeAt(i) - "0".charCodeAt(0);
//   return sum;
// }

// // Return true if the card number is valid
// function isValid(number) {
//   return (
//     getSize(number) >= 13 &&
//     getSize(number) <= 16 &&
//     (prefixMatched(number, 4) ||
//       prefixMatched(number, 5) ||
//       prefixMatched(number, 37) ||
//       prefixMatched(number, 6)) &&
//     (sumOfDoubleEvenPlace(number) + sumOfOddPlace(number)) % 10 == 0
//   );
// }

// // Driver Code

// let number = 1234567890123456;
// console.log(number + " is " + (isValid(number) ? "valid" : "invalid"));
