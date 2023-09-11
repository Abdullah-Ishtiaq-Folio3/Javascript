// Array:
// 	Create an array and add some elements to it.
// 	Iterate through the array and print the elements.
// 	Find the index of an element in the array.
// 	Remove an element from the array.

arr = [39, 42, 44];
arr.push(45);
arr.push(50);
arr.unshift(32);

arr.forEach((value) => console.log(value));
console.log("Index of 45:", arr.indexOf(45));

console.log("Element Removed:", arr.shift());
console.log("Element Removed:", arr.pop());

console.log(arr);
