// Create an array of objects and print the object with the highest value
function getHighestValue(arr, condition) {
  if (arr.length == 0) return null;
  return arr.reduce((highestValue, currValue) => {
    return condition(highestValue, currValue);
  });
}

function getHigherValue(obj1, obj2) {
  if (obj1.value > obj2.value) return obj1;
  return obj2;
}

arr = [
  { value: 24 },
  { value: 28 },
  { value: 37 },
  { value: 4 },
  { value: 2 },
  { value: 54 },
  { value: 43 },
];
console.log(getHighestValue(arr, getHigherValue));
console.log(getHighestValue([], getHigherValue));
