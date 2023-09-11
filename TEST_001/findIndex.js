// Find the index of an element in an array
function findIndex(arr, element) {
  return arr.indexOf(element);
}

arr = [2, 3, 42, 4, 5, 35, 6, 35, 2, 32, 4];
console.log(findIndex(arr, 35));
console.log(findIndex(arr, -4));
console.log(findIndex(arr, 4));
