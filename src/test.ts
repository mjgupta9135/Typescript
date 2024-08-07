function greet(firstName: string) {
  console.log("hi " + firstName);
}
greet("Mrityunjay");

//type inference
function sum(num1: number, num2: number): number {
  //add return type in function
  return num1 + num2;
}
console.log(sum(1, 2));

//returns true or false based on if a user is 18+

function isLegal(age: number): boolean {
  if (age >= 18) return true;
  else return false;
}
const answer: boolean = isLegal(17);
console.log(answer);

//Create a function that  takes as input and runs it after 1 second
function trial(sum: (num1: number, num2: number) => number) {
  console.log(sum(4, 5));
}
trial(sum);
