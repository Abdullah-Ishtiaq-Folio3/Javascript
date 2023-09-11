// Sort an array of numbers in ascending order
function sortNumbers(arr, ascending) {
  // By default sort treats elements as strings, we need to send compare function as an argument
  return arr.sort(function (a, b) {
    if (ascending) return a - b;
    else return b - a;
  });
}

arr = [1, 5, 23, 8, 45, 2, 6, 8, 4, 3];
console.log(arr);
arr = sortNumbers(arr, true);
console.log(arr);
arr = sortNumbers(arr, false);
console.log(arr);
