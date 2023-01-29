// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply);

// https://www.codewars.com/kata/515e271a311df0350d00000f
// function squareSum(numbers) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     count += numbers[i] ** 2;
//   }
//   return count;
// }

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// function findNeedle(haystack) {
//   const check = haystack.findIndex((element) => element === "needle");
//   return `found the needle at position ${check}`;
// }

// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// var isSquare = function (n) {
//   var Result = undefined;
//   if (n < 0) {
//     return false;
//   } else {
//     for (let i = 0; i <= n; i++) {
//       if (i ** 2 == n) {
//         Result = true;
//         break;
//       }
//     }
//   }
//   if (Result === true) {
//     return true;
//   } else {
//     return false;
//   }
// };

// https://www.codewars.com/kata/54e6533c92449cc251001667
// var uniqueInOrder = function (iterable) {
//   var arr = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// };

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let filter = birds.filter((e) => !geese.includes(e));
//   return filter;
// }

// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
// function paperwork(n, m) {
//   if (n > 0 && m > 0) {
//     return n * m;
//   } else if (n > 0 && m < 0) {
//     return 0;
//   } else if (n < 0 && m < 0) {
//     return 0;
//   } else if (n < 0 || m > 0) {
//     return 0;
//   } else {
//     return n * m;
//   }
// }

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// 1 :
// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return "Even";
//   } else if (number < 0) {
//     return "Odd";
//   } else if (number == 0) {
//     return "Even";
//   } else if (number > 0) {
//     return "Odd";
//   }
// }
// 2 :
// function even_or_odd(number) {
//   return number % 2 == 0 ? "Even" : "Odd";
// }

// https://www.codewars.com/kata/568dcc3c7f12767a62000038
// function setAlarm(employed, vacation) {
//   if (employed === true && vacation === true) {
//     return false;
//   } else if (employed === false) {
//     return false;
//   } else if (employed === true && vacation === false) {
//     return true;
//   }
// }

// https://www.codewars.com/kata/551b4501ac0447318f0009cd
// function booleanToString(b) {
//   if (b === true) {
//     return true.toString();
//   } else if (b === false) {
//     return false.toString();
//   }
// }

// https://www.codewars.com/kata/58261acb22be6e2ed800003a
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// function stringToArray(string) {
//   return string.split(" ");
// }

// https://www.codewars.com/kata/583710ccaa6717322c000105
// function simpleMultiplication(number) {
//   if (Math.floor(number / 2) == number / 2) {
//     return number * 8;
//   } else {
//     return number * 9;
//   }
// }
