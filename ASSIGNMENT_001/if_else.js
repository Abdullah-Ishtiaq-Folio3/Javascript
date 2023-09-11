// If/else, switch, nested if else:
// 	Create an if/else statement to check if a number is even or odd.
// 	Create a switch statement to check the value of a variable and print a message accordingly.
// 	Create a nested if/else statement to check if a number is positive, negative, or zero.

function checkEvenOrOdd(num) {
  if (num % 2 == 0) console.log("Even");
  else console.log("Odd");
}

checkEvenOrOdd(3);
checkEvenOrOdd(6);

function carCapacity(passengers) {
  switch (passengers) {
    case 0:
      console.log("Car is empty!");
      break;
    case 1:
      console.log("Only driver is here:)");
      break;
    case 2:
      console.log("Back seat is empty!");
      break;
    case 3:
      console.log("2 more people can join :')");
      break;
    case 4:
      console.log("Last seat left!");
      break;
    case 5:
      console.log("The car is full!!!");
      break;
    default:
      console.log("That doesn't sound like a car :O");
      break;
  }
}

carCapacity(3);
carCapacity(5);
carCapacity(7);

function checkNumber(num) {
  if (num < 0) console.log("Negative");
  else if (num == 0) console.log("Zero");
  else console.log("Positive");
}

checkNumber(-42);
checkNumber(0);
checkNumber(32);
