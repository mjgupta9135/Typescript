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

//Object Playing
function isAble(user: { firstName: string; lastName: string; age: number }) {
  //if we use this object data in many places then we have to write this type of data in all place where we use object
  if (user.age > 18) return true;
  else return false;
}
const result = isAble({
  firstName: "Mrityunjay",
  lastName: "Gupta",
  age: 21,
});
console.log(result);
//To overcome this we use interface where we define the type of object in one place and use it everywhere
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; //optional argument
}

function isAble2(user: User) {
  if (user.age > 18) return true;
  else return false;
}
function greet2(user: User) {
  console.log("Hi There " + user.firstName);
}

greet2({
  firstName: "Mrityunjay",
  lastName: "Gupta",
  age: 21,
});
const result2 = isAble2({
  firstName: "Mrityunjay",
  lastName: "Gupta",
  age: 21,
});
console.log(result2);

//Type almost the same as interface it cant be implemented as interfaces
type User2 = {
  firsName: string;
  lastName: string;
  age: number;
};
//First Difference is Union
//Print the id of a user which can be number or string
function printId(id: number | string) {
  //But this syntax is not readable or optimized so we use type in it
  console.log("Id of user is :" + id);
}
printId(8);
printId("12");

//This sytax looks clean and optimized {We cant do this through interface}
type printArg = string | number;

function printId2(id: printArg) {
  //But this syntax is not readable or optimized so we use type in it
  console.log("Id of user is :" + id);
}
printId2(5);
printId2("10");

//Second difference that is Intersection
//If you have to use two type simultaneously

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "Mrityunjay",
  startDate: new Date(),
  department: "Software Developer",
};

function printDetails(team: TeamLead) {
  console.log(team.name);
  console.log(team.startDate);
  console.log(team.department);
}

printDetails(teamLead);

//Array in tyescript
//There are two ways through we can aceess array into typescript
//First is through interface
//Function to return max values in arary
