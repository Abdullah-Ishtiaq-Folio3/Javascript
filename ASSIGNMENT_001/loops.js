// Different types of loops:
// 	Create a for loop to iterate through an array.
// 	Create a while loop to iterate until a condition is met.
// 	Create a do-while loop to iterate at least once.
// 	Create a for-each loop to iterate through an array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

msg = "find index of cApital letter";
let i = 0;
while (msg.charCodeAt(i) < 65 || msg.charCodeAt(i) > 90) {
  console.log(msg[i]);
  i++;
}
console.log("Index:", i);

const flag = false;
do {
  console.log("I'm in here do-block!");
} while (flag);

arr.forEach((value) => console.log(value));
