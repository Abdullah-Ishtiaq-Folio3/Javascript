// Spread operator:
// 	Use the spread operator to add the elements of one array to another array.
// 	Use the spread operator to create a new array with the elements of an existing array.
// 	Use the spread operator to pass an array as an argument to a function.

arr1 = [1, 2, 3, 4];
arr2 = [5, 6, 7, 8];
arr1 = [...arr1, ...arr2];
console.log(arr1);

arr3 = [...arr2];
console.log(arr3);

function receiveArray() {
  for (let i = 0; i < arguments.length; i++) console.log(arguments[i]);
}

receiveArray(...arr1);
