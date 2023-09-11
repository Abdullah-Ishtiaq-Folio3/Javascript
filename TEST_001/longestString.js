// Create an array of strings and print the longest string
function longestString(arr) {
  if (arr.length == 0) return;
  console.log(
    arr.reduce((longestLength, curLength) => {
      if (curLength > longestLength) longestLength = curLength;
      return longestLength;
    })
  );
}

arr = ["12345678", "123456", "12345678910", "1234", "1234567890", "123456"];
longestString(arr);
longestString([]);
