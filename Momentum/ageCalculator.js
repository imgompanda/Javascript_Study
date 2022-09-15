const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Plz type a real positive number");
}
// else {
//   console.log('Thank you for writing your age');
// }
else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  // && and, || or
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
