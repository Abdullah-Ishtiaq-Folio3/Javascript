// Check if a number is even or odd
// This function returns true if number is even, and false if number is odd
function checkEven(num) {
  return num % 2 == 0;
}

console.log(checkEven(44));
console.log(checkEven(-2));
console.log(checkEven(7));

// Reverse string
function reverseString(msg) {
  return msg.split("").reverse().join("");
}
console.log(reverseString("ABCDWFGHIJKLMNOPQRSTUVWXYZ"));

// Checking palindrome
function checkPalindrom(msg) {
  const len = msg.length;
  for (let i = 0; i < len / 2; i++) {
    if (msg[i] != msg[len - 1 - i]) return false;
  }
  return true;
}
console.log(checkPalindrom("abccba"));
console.log(checkPalindrom("abcba"));
console.log(checkPalindrom("abccbaa"));
console.log(checkPalindrom("a"));

// Finding Factorial
function factorial(num) {
  if (num < 0) return null;
  else if (num <= 1) return 1;
  else return num * factorial(num - 1);
}

console.log(factorial(-347));
console.log(factorial(0));
console.log(factorial(5));
