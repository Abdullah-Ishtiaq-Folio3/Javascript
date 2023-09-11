// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array
function sumEven(arr) {
  return arr
    .filter((value) => value % 2 == 0)
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
}

arr = [1, 3, 4, 5, 2, 5, 6, 78, 4, 2, 4, 6, 7];
console.log(sumEven(arr));
console.log(sumEven([]));
