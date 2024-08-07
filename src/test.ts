function greet(firstName: string) {
  console.log("hi " + firstName);
}
greet("Mrityunjay");

//Type inference
function sum(num1: number, num2: number): number {
  //add return type in function
  return num1 + num2;
}
console.log(sum(1, 2));

//Returns true or false based on if a user is 18+

function isLegal(age: number): boolean {
  if (age >= 18) return true;
  else return false;
}
const answer: boolean = isLegal(17);
console.log(answer);

//Create a function that  takes as input and runs it after 1 second
//here we have to specify the return type of function as well as their argument
function trial(sum: (num1: number, num2: number) => number) {
  console.log(sum(4, 5));
}
trial(sum);

//Things to customize in tsconfig.json
//1.First add root directory to src and Out directory to dist
//2. No implicit any because it gives all variables and function to any type by default
//3. ///Enable Remove comment:true  it will not allow comments to run that code
