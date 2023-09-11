// To destruct an array, we use square brackets
arr = [1, 2, 3];
[a, b, c] = arr;
console.log(a, b, c);

// To destruct an object, we use curly brackets
obj = { id: 21, name: "Abdullah" };
({ id, name } = obj);
console.log(id, name);
// If we want to change name of the variables
({ id: personID, name: personName } = obj);
console.log(personID, personName);
