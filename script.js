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

// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
// function hello(name) {
//   if (name) {
//     return `Hello, ${name.charAt(0).toUpperCase()}${name
//       .slice(1)
//       .toLowerCase()}!`;
//   } else {
//     return `Hello, World!`;
//   }
// }

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
// function min(arr, toReturn) {
//   let array = Math.min(...arr);
//   if (toReturn == "value") {
//     return array;
//   } else {
//     return arr.indexOf(array);
//   }
// }

// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// function openOrSenior(data) {
//   let array = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i][0] < 55) {
//       array.push("Open");
//     } else if (data[i][0] >= 55 && data[i][1] <= 7) {
//       array.push("Open");
//     } else if (data[i][0] >= 55 || data[i][1] >= 7) {
//       array.push("Senior");
//     }
//   }
//   return array;
// }
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// function removeChar(str) {
//   return str ? str.slice(1, -1) : false;
// }

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 == 0 && flower2 % 2 == 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 !== 0)
//     ? false
//     : true;
// }

// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// function shortcut(string) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let array = [];
//   for (let i = 0; i < string.length; i++) {
//     let check = vowels.indexOf(string[i]);
//     if (check == -1) {
//       array.push(string[i]);
//     }
//   }
//   return array.join("");
// }

// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month >= 4 && month < 7) {
//     return 2;
//   } else if (month >= 7 && month < 10) {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript ?
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript ?
// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript ?
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript ?

//https:www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
function mango(quantity, price) {}

console.log(mango(3, 3));
// 6;
console.log(mango(9, 5));
// 30
