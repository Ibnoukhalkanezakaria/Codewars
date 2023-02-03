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

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// var uniqueInOrder = function (iterable) {
//   let newArray = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       newArray.push(iterable[i]);
//     }
//   }
//   return newArray;
// };

// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
// function multiply(a, b) {
//   return a * b;
// }

// https:www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
// function cockroachSpeed(s) {
//   if (s) {
//     return Math.floor(s / 0.036);
//   } else {
//     return 0;
//   }
// }

//https:www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// function century(year) {
//   let newyear = year.toString();
//   let fin = 0;
//   if (year >= 89 && year < 100) {
//     return 1;
//   } else if (year % 100 !== 0) {
//     newyear = Math.floor(year * 0.01) + 1;
//     fin += newyear;
//   } else {
//     newyear = year / 100;
//     fin += newyear;
//   }
//   return fin;
// }

// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// function basicOp(operation, value1, value2) {
//   if (operation == "+") {
//     return value1 + value2;
//   } else if (operation == "-") {
//     return value1 - value2;
//   } else if (operation == "*") {
//     return value1 * value2;
//   } else {
//     return value1 / value2;
//   }
// }

//https:www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
// function invert(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       let index = array[i];
//       newArray.push(-index);
//     } else if (array[i] < 0) {
//       let index = array[i];
//       newArray.push(-index);
//     }
//   }
//   return newArray;
// }

//https:www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// function sumMix(x) {
//   let newArray = [];
//   let start = 0;
//   let newX;
//   for (let i = 0; i < x.length; i++) {
//     if (typeof x[i] === "string") {
//       newX = +x[i];
//       start += newX;
//       newArray.push(start);
//     } else if (x[i]) {
//       newX = +x[i];
//       start += newX;
//       newArray.push(start);
//     }
//   }
//   return start;
// }

// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// function addLength(str) {
//   let newStr = str.split(" ");
//   let length;
//   let fin;
//   let newArray = [];
//   for (let i = 0; i < newStr.length; i++) {
//     length = newStr[i].length;
//     fin = `${newStr[i]} ${length}`;
//     newArray.push(fin);
//   }
//   return newArray;
// }

// ?
//https:www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
// function stray(numbers) {
//   let newArray = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== numbers[i + 1] && numbers[i] == numbers[i + 2]) {
//       newArray += numbers[i + 1];
//       break;
//     } else if (numbers[i] == numbers[i + 1]) {
//       newArray += numbers[i + 2];
//       break;
//     } else if (numbers[i] !== numbers[i + 1]) {
//       newArray += numbers[i];
//       break;
//     } else if (numbers[i] == 0) {
//       newArray = 0;
//       break;
//     } else {
//       return 0;
//     }
//   }
//   return newArray;
// }

// console.log(stray([-3, -17, -17, -17, -17, -17, -17]));
// console.log(stray([3, 17, 17, 17, 17, 17, 17]));
// console.log(stray([1, 1, 2]));
// console.log(stray([1, 2, 1]));
// console.log(stray([0, 2, 0]));
// console.log(stray([2, 1, 1]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
// console.log(stray([17, 3, 17, 17, 17]));
// console.log(stray([1]));
// console.log(stray([-10000, 200000, 200000, 200000, 200000, 200000]));

//https: www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// function grow(x) {
//   let start = 1;
//   for (let i = 0; i < x.length; i++) {
//     start = start * x[i];
//   }
//   return start;
// }

//https:www.codewars.com/kata/55f8a9c06c018a0d6e000132
// function validatePIN(str) {
//   if (str.length !== 4 && str.length !== 6) {
//     return false;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] < "0" || str[i] > "9") {
//       return false;
//     }
//   }
//   return true;
// }

//https: www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// function opposite(number) {
//   if (number < 0) {
//     return -number;
//   }
//   return number > 0 ? -number : number;
// }

//https:www.codewars.com/kata/5a023c426975981341000014/train/javascript
// function otherAngle(a, b) {
//   let start = 180;
//   let Result = a + b;
//   return start - Result;
// }

//https:www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// function DNAStrand(dna) {
//   let newArray = [];
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == "T") {
//       newArray.push("A");
//     } else if (dna[i] == "A") {
//       newArray.push("T");
//     } else if (dna[i] == "G") {
//       newArray.push("C");
//     } else if (dna[i] == "C") {
//       newArray.push("G");
//     }
//   }
//   return newArray.join("");
// }

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

//https:www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// function getAverage(marks) {
//   let start = 0;
//   for (let i = 0; i < marks.length; i++) {
//     start = start + marks[i];
//   }
//   return Math.floor(start / marks.length);
// }

//https:www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// function findShort(s) {
//   let newArray = s.split(" ");
//   let array;
//   let min;
//   let arrayNumbers = [];
//   for (let i = 0; i < newArray.length; i++) {
//     array = newArray[i].length;
//     arrayNumbers.push(array);
//     for (let j = 0; j < arrayNumbers.length; j++) {
//       min = Math.min(...arrayNumbers);
//     }
//   }
//   return min;
// }

// Tomorrow

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
