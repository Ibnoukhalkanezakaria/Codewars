// // https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
// // function multiply(a, b) {
// //   return a * b;
// // }
// // console.log(multiply);

// // https://www.codewars.com/kata/515e271a311df0350d00000f
// // function squareSum(numbers) {
// //   let count = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     count += numbers[i] ** 2;
// //   }
// //   return count;
// // }

// // https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// // function findNeedle(haystack) {
// //   const check = haystack.findIndex((element) => element === "needle");
// //   return `found the needle at position ${check}`;
// // }

// // https://www.codewars.com/kata/54c27a33fb7da0db0100040e
// // var isSquare = function (n) {
// //   var Result = undefined;
// //   if (n < 0) {
// //     return false;
// //   } else {
// //     for (let i = 0; i <= n; i++) {
// //       if (i ** 2 == n) {
// //         Result = true;
// //         break;
// //       }
// //     }
// //   }
// //   if (Result === true) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // https://www.codewars.com/kata/54e6533c92449cc251001667
// // var uniqueInOrder = function (iterable) {
// //   var arr = [];
// //   for (let i = 0; i < iterable.length; i++) {
// //     if (iterable[i] !== iterable[i + 1]) {
// //       arr.push(iterable[i]);
// //     }
// //   }
// //   return arr;
// // };

// // https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
// // function gooseFilter(birds) {
// //   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// //   let filter = birds.filter((e) => !geese.includes(e));
// //   return filter;
// // }

// // https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
// // function paperwork(n, m) {
// //   if (n > 0 && m > 0) {
// //     return n * m;
// //   } else if (n > 0 && m < 0) {
// //     return 0;
// //   } else if (n < 0 && m < 0) {
// //     return 0;
// //   } else if (n < 0 || m > 0) {
// //     return 0;
// //   } else {
// //     return n * m;
// //   }
// // }

// // https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// // 1 :
// // function evenOrOdd(number) {
// //   if (number % 2 == 0) {
// //     return "Even";
// //   } else if (number < 0) {
// //     return "Odd";
// //   } else if (number == 0) {
// //     return "Even";
// //   } else if (number > 0) {
// //     return "Odd";
// //   }
// // }
// // 2 :
// // function even_or_odd(number) {
// //   return number % 2 == 0 ? "Even" : "Odd";
// // }

// // https://www.codewars.com/kata/568dcc3c7f12767a62000038
// // function setAlarm(employed, vacation) {
// //   if (employed === true && vacation === true) {
// //     return false;
// //   } else if (employed === false) {
// //     return false;
// //   } else if (employed === true && vacation === false) {
// //     return true;
// //   }
// // }

// // https://www.codewars.com/kata/551b4501ac0447318f0009cd
// // function booleanToString(b) {
// //   if (b === true) {
// //     return true.toString();
// //   } else if (b === false) {
// //     return false.toString();
// //   }
// // }

// // https://www.codewars.com/kata/58261acb22be6e2ed800003a
// // class Kata {
// //   static getVolumeOfCuboid(length, width, height) {
// //     return length * width * height;
// //   }
// // }

// // https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
// // function stringToArray(string) {
// //   return string.split(" ");
// // }

// // https://www.codewars.com/kata/583710ccaa6717322c000105
// // function simpleMultiplication(number) {
// //   if (Math.floor(number / 2) == number / 2) {
// //     return number * 8;
// //   } else {
// //     return number * 9;
// //   }
// // }

// // https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
// // function hello(name) {
// //   if (name) {
// //     return `Hello, ${name.charAt(0)}${name
// //       .slice(1)
// //       .toLowerCase()}!`;
// //   } else {
// //     return `Hello, World!`;
// //   }
// // }

// // https://www.codewars.com/kata/544a54fd18b8e06d240005c0
// // function min(arr, toReturn) {
// //   let array = Math.min(...arr);
// //   if (toReturn == "value") {
// //     return array;
// //   } else {
// //     return arr.indexOf(array);
// //   }
// // }

// // https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
// // function openOrSenior(data) {
// //   let array = [];
// //   for (let i = 0; i < data.length; i++) {
// //     if (data[i][0] < 55) {
// //       array.push("Open");
// //     } else if (data[i][0] >= 55 && data[i][1] <= 7) {
// //       array.push("Open");
// //     } else if (data[i][0] >= 55 || data[i][1] >= 7) {
// //       array.push("Senior");
// //     }
// //   }
// //   return array;
// // }
// // https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// // function createPhoneNumber(numbers) {
// //   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// // }

// // https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// // function removeChar(str) {
// //   return str ? str.slice(1, -1) : false;
// // }

// // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// // function lovefunc(flower1, flower2) {
// //   return (flower1 % 2 == 0 && flower2 % 2 == 0) ||
// //     (flower1 % 2 !== 0 && flower2 % 2 !== 0)
// //     ? false
// //     : true;
// // }

// // https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
// // function shortcut(string) {
// //   let vowels = ["a", "e", "i", "o", "u"];
// //   let array = [];
// //   for (let i = 0; i < string.length; i++) {
// //     let check = vowels.indexOf(string[i]);
// //     if (check == -1) {
// //       array.push(string[i]);
// //     }
// //   }
// //   return array.join("");
// // }

// // https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
// // const quarterOf = (month) => {
// //   if (month <= 3) {
// //     return 1;
// //   } else if (month >= 4 && month < 7) {
// //     return 2;
// //   } else if (month >= 7 && month < 10) {
// //     return 3;
// //   } else {
// //     return 4;
// //   }
// // };

// // https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
// // function removeExclamationMarks(s) {
// //   return s.split("!").join("");
// // }

// // https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// // var uniqueInOrder = function (iterable) {
// //   let newArray = [];
// //   for (let i = 0; i < iterable.length; i++) {
// //     if (iterable[i] !== iterable[i + 1]) {
// //       newArray.push(iterable[i]);
// //     }
// //   }
// //   return newArray;
// // };

// // https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
// // function multiply(a, b) {
// //   return a * b;
// // }

// // https:www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
// // function cockroachSpeed(s) {
// //   if (s) {
// //     return Math.floor(s / 0.036);
// //   } else {
// //     return 0;
// //   }
// // }

// //https:www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// // function century(year) {
// //   let newyear = year.toString();
// //   let fin = 0;
// //   if (year >= 89 && year < 100) {
// //     return 1;
// //   } else if (year % 100 !== 0) {
// //     newyear = Math.floor(year * 0.01) + 1;
// //     fin += newyear;
// //   } else {
// //     newyear = year / 100;
// //     fin += newyear;
// //   }
// //   return fin;
// // }

// // https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// // function basicOp(operation, value1, value2) {
// //   if (operation == "+") {
// //     return value1 + value2;
// //   } else if (operation == "-") {
// //     return value1 - value2;
// //   } else if (operation == "*") {
// //     return value1 * value2;
// //   } else {
// //     return value1 / value2;
// //   }
// // }

// //https:www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
// // function invert(array) {
// //   let newArray = [];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] >= 0) {
// //       let index = array[i];
// //       newArray.push(-index);
// //     } else if (array[i] < 0) {
// //       let index = array[i];
// //       newArray.push(-index);
// //     }
// //   }
// //   return newArray;
// // }

// //https:www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// // function sumMix(x) {
// //   let newArray = [];
// //   let start = 0;
// //   let newX;
// //   for (let i = 0; i < x.length; i++) {
// //     if (typeof x[i] === "string") {
// //       newX = +x[i];
// //       start += newX;
// //       newArray.push(start);
// //     } else if (x[i]) {
// //       newX = +x[i];
// //       start += newX;
// //       newArray.push(start);
// //     }
// //   }
// //   return start;
// // }

// // https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
// // function addLength(str) {
// //   let newStr = str.split(" ");
// //   let length;
// //   let fin;
// //   let newArray = [];
// //   for (let i = 0; i < newStr.length; i++) {
// //     length = newStr[i].length;
// //     fin = `${newStr[i]} ${length}`;
// //     newArray.push(fin);
// //   }
// //   return newArray;
// // }

// //https: www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// // function grow(x) {
// //   let start = 1;
// //   for (let i = 0; i < x.length; i++) {
// //     start = start * x[i];
// //   }
// //   return start;
// // }

// //https:www.codewars.com/kata/55f8a9c06c018a0d6e000132
// // function validatePIN(str) {
// //   if (str.length !== 4 && str.length !== 6) {
// //     return false;
// //   }
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] < "0" || str[i] > "9") {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// //https: www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// // function opposite(number) {
// //   if (number < 0) {
// //     return -number;
// //   }
// //   return number > 0 ? -number : number;
// // }

// //https:www.codewars.com/kata/5a023c426975981341000014/train/javascript
// // function otherAngle(a, b) {
// //   let start = 180;
// //   let Result = a + b;
// //   return start - Result;
// // }

// //https:www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// // function DNAStrand(dna) {
// //   let newArray = [];
// //   for (let i = 0; i < dna.length; i++) {
// //     if (dna[i] == "T") {
// //       newArray.push("A");
// //     } else if (dna[i] == "A") {
// //       newArray.push("T");
// //     } else if (dna[i] == "G") {
// //       newArray.push("C");
// //     } else if (dna[i] == "C") {
// //       newArray.push("G");
// //     }
// //   }
// //   return newArray.join("");
// // }

// // https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

// //https:www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
// // function getAverage(marks) {
// //   let start = 0;
// //   for (let i = 0; i < marks.length; i++) {
// //     start = start + marks[i];
// //   }
// //   return Math.floor(start / marks.length);
// // }

// //https:www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// // function findShort(s) {
// //   let newArray = s.split(" ");
// //   let array;
// //   let min;
// //   let arrayNumbers = [];
// //   for (let i = 0; i < newArray.length; i++) {
// //     array = newArray[i].length;
// //     arrayNumbers.push(array);
// //     for (let j = 0; j < arrayNumbers.length; j++) {
// //       min = Math.min(...arrayNumbers);
// //     }
// //   }
// //   return min;
// // }

// //https:www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// // if (num < 0) {
// //   return num;
// // } else if (num > 0) {
// //   return -num;
// // } else {
// //   return 0;
// // }

// //https:www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// // var countSheep = function (num) {
// //   let start = 0;
// //   let arr = [];
// //   for (let i = 0; i < num; i++) {
// //     start += 1;
// //     arr.push(`${start} sheep...`);
// //   }
// //   return arr.join("");
// // };

// // https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// // function numberToString(num) {
// //   return num.toString();
// // }

// //https:www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
// // function litres(time) {
// //   let result = time * 0.5;
// //   return Math.floor(result);
// // }

// // https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
// // function repeatStr(n, s) {
// //   return s.repeat(n);
// // }

// //www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// // var min = function (list) {
// //   return Math.min(...list);
// // };
// // var max = function (list) {
// //   return Math.max(...list);
// // };

// //https:www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// // function friend(friends) {
// //   let arr = [];
// //   let newArray = [];
// //   for (let i = 0; i < friends.length; i++) {
// //     if (friends[i].length == 4) {
// //       arr.push(friends[i]);
// //     }
// //   }
// //   newArray = arr;
// //   return newArray;
// // }

// // https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
// // function hoopCount(n) {
// //   return n < 10
// //     ? "Keep at it until you get it"
// //     : "Great, now move on to tricks";
// // }

// // https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
// // function greet(name, owner) {
// //   return name == owner ? "Hello boss" : "Hello guest";
// // }

// // https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// // function hero(bullets, dragons) {
// //   return bullets / 2 >= dragons ? true : false;
// // }

// //https:www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// // function solution(str) {
// //   return str.split("").reverse().join("");
// // }

// // https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// // function boolToWord(bool) {
// //   return bool ? "Yes" : "No";
// // }

//https:www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// function getCount(str) {
//   let arr = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   let newArray = str.split("");
//   for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (newArray[i] === arr[j]) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

//https:www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
// var number = function (array) {
//   let one = "";
//   let newArray = [];
//   if (array == "") {
//     return "";
//   }
//   for (let i = 0; i < array.length; i++) {
//     one = `${[i + 1]}: ${array[i]}`;
//     newArray.push(one);
//   }
//   return newArray;
// };

// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
// function greet() {
//   return "hello world!";
// }

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// function findAverage(array) {
//   if (array === "") {
//     return 0;
//   }
//   let start = 0;
//   for (let i = 0; i < array.length; i++) {
//     start += array[i];
//   }
//   return start / array.length;
// }

//https:www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// function getAge(inputString) {
//   return +inputString[0];
// }

//https:www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// function moveZeros(arr) {
//   let newArray = [];
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       newArray.push(arr[i]);
//       newArray.join("");
//     } else if (arr[i] == 0) {
//       array.push(arr[i]);
//       array.join("");
//     }
//   }
//   return newArray.concat(array);
// }

//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
//  function updateLight(current) {
//   if (current == "green") {
//     return "yellow";
//   } else if (current == "yellow") {
//     return "red";
//   } else if (current == "red") {
//     return "green";
//   }
// }

// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// function minMax(arr) {
//   let newArray = [];
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   newArray.push(min, max);
//   return newArray;
// }

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
// function DNAtoRNA(dna) {
//   let arr = dna.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "T") {
//       arr[i] = "U";
//     }
//   }
//   return arr.join("");
// }

// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// function strCount(str, letter) {
//   let start = 0;
//   let arr = letter;
//   if (str == "") {
//     return 0;
//   }
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (str[i] == arr[j]) {
//         start += 1;
//       }
//     }
//   }
//   return start;
// }

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// function positiveSum(arr) {
//   let count = 0;
//   if (arr == "") {
//     return 0;
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > 0) {
//       count += arr[j];
//     }
//   }
//   return count;
// }

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// function highAndLow(numbers) {
//   let arr = numbers.split(" ");
//   let low = Math.min(...arr);
//   let high = Math.max(...arr);
//   let newArray = [];
//   newArray.push(high, low);
//   return newArray.join(" ");
// }

// https:www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript
// function findUniq(arr) {
//   let newArray = [];
//   for (let j = 0; j < arr.length; j++) {
//     let result = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[j] == arr[i] && i !== j) {
//         result = true;
//         break;
//       }
//     }
//     if (result == false) {
//       newArray.push(arr[j]);
//     }
//   }
//   return +newArray.join("");
// }

//https:www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// function filter_list(l) {
//   let arr = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === "number") {
//       arr.push(l[i]);
//     }
//   }
//   return arr;
// }

// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
// function smash (words) {
//    return words !== "" ? words.join(" ") : ""
// };

//https:www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] == true) {
//       count += 1;
//     }
//   }
//   return count;
// }

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// function abbrevName(name) {
//   return `${name.split(" ")[0][0]}.${name
//     .split(" ")[1][0]
//     }`;
// }

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// function fakeBin(x) {
//   let newArray = x.split("");
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] >= 5) {
//       newArray[i] = 1;
//     } else if (newArray[i] !== 5) {
//       newArray[i] = 0;
//     }
//   }
//   return newArray.join("");
// }

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
// function noSpace(x) {
//   let newArray = x.split(" ").join("");
//   return newArray;
// }

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// function reverseWords(str) {
//   let array = [];
//   let arr = str.split(" ");
//   let newA = "";
//   let start = "";
//   for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i]);
//     for (let j = 0; j < array.length; j++) {
//       newA = array[j].split("").reverse().join("");
//     }
//     start += `${newA} `;
//   }
//   return start.split(" ").slice(0, -1).join(" ");
// }

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
// function descendingOrder(n) {
//   let one = n.toString();
//   return +one.split("").sort().reverse().join("");
// }

//https:www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
// function areYouPlayingBanjo(name) {
//   if (name[0] == "R" || name[0] == "r") {
//     return `${name} plays banjo`;
//   } else {
//     return `${name} does not play banjo`;
//   }
// }

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// function maps(x) {
//   let newArr = [];
//   for (let j = 0; j < x.length; j++) {
//     newArr.push(x[j] * 2);
//   }
//   return newArr;
// }

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// function getMiddle(s) {
//   let arr = s.split("");
//   for (let j = 0; j < arr.length; j++) {
//     if (arr.length % 2 == 0) {
//       return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1).join("");
//     } else {
//       return arr[Math.floor(arr.length / 2)];
//     }
//   }
// }

// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69
// function hamming(a, b) {
//   if (a == b) {
//     return 0;
//   }
//   let newA = a.split("");
//   let newB = b.split("");
//   let newArray = [];
//   for (let i = 0; i < newA.length; i++) {
//     for (let j = 0; j < newB.length; j++) {
//       if (i == j && newA[i] !== newB[j]) {
//         newArray.push(newB[i]);
//       }
//     }
//   }
//   return newArray.length;
// }

// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// function arrayDiff(a, b) {
//   let newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     let index = b.indexOf(a[i]);
//     if (index == -1) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// }

// function disemvowel(str) {
//   let arr = ["i", "e", "o", "a", "u"];
//   let newArray = [];
//   for (let i = 0; i < str.length; i++) {
//     let index = arr.indexOf(str[i]);
//     if (index == -1) {
//       newArray.push(str[i]);
//     }
//   }
//   return newArray.join("");
// }

// function disemvowel(str) {
//   let arr = ["i", "e", "o", "a", "u"];
//   let newArray = [];
//   let oneArray = [];
//   let arraay = str.split("");
//   for (let j = 0; j < arraay.length; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arraay[j].toUpperCase() == arr[i].toUpperCase()) {
//         newArray.push(arraay[j]);
//       }
//     }
//     let check = newArray.indexOf(arraay[j]);
//     if (check == -1) {
//       oneArray.push(arraay[j]);
//     }
//   }
//   return oneArray.join("");
// }

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// function sumTwoSmallestNumbers(numbers) {
//   let one = Math.min(...numbers);
//   let arr = [];
//   let newNumbers = numbers.sort();
//   for (let i = 0; i < newNumbers.length; i++) {
//     if (newNumbers[i] !== one) {
//       arr.push(newNumbers[i]);
//     } else if (newNumbers[i] == newNumbers[i + 1]) {
//       return newNumbers[i] + newNumbers[i + 1];
//     }
//   }
//   return Math.min(...arr) + one;
// }

// function testEven(n) {
//   return n % 2 == 0 ? true : false;
// }

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
// function digitize(n) {
//   let newN = n.toString().split("").reverse();
//   let arr = [];
//   for (let i = 0; i < newN.length; i++) {
//     arr.push(+newN[i]);
//   }
//   return arr;
// }

// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// function doubleChar(str) {
//   let newArr = str.split("");
//   let newOne = [];
//   for (let i = 0; i < newArr.length; i++) {
//     newOne.push(`${newArr[i]}${newArr[i]}`);
//   }
//   return newOne.join("");
// }

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// function squareDigits(num) {
//   let arrrray = num.toString().split("");
//   let arr = [];
//   for (let i = 0; i < arrrray.length; i++) {
//     arr.push(+arrrray[i] * +arrrray[i]);
//   }
//   return +arr.join("");
// }

// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// function pigIt(str) {
//   let newArray = str.split(" ");
//   let last;
//   let first;
//   let fin;
//   let arr = [];
//   let arraay = [];
//   for (let i = 0; i < newArray.length; i++) {
//     last = newArray[i].split("").reverse().slice(-1).join();
//     first = newArray[i].split("").slice(1, newArray[i].length).join("");
//     if (newArray[i] == "!" || newArray[i] == "?") {
//       fin = `${first}${last}`;
//       arr.push(fin);
//     } else {
//       fin = `${first}${last}ay`;
//       arr.push(fin);
//     }
//     arraay = arr;
//   }
//   return arraay.join(" ");
// }

// https://leetcode.com/problems/two-sum/
// var twoSum = function (nums, target) {
//   let newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target && i != j) {
//         newArr.push(i, j);
//         return newArr;
//       }
//     }
//   }
// };

// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// function oddOrEven(array) {
//   if (array == "") {
//     return "even";
//   }
//   let count = 0;
//   for (let j = 0; j < array.length; j++) {
//     count += array[j];
//   }
//   if (count % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
