// Arrow functions and syntax:
// 	Create an arrow function to add two numbers.
// 	Create an arrow function to reverse a string.
// 	Create an arrow function to take an array as an argument and return the sum of all the elements.

const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(34, 32));

const reverseStirng = (msg) => msg.split("").reverse().join("");
console.log(reverseStirng("HELLO"));

const sumArray = (arr) => {
  const len = arr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) sum += arr[i];
  return sum;
};

arr = [1, 2, 3, 4, 5, 6, -3];
console.log(sumArray(arr));
