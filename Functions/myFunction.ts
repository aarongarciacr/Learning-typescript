function addTwo(num) {
  num.toUpperCase();
  return num + 2;
}

addTwo(5);
addTwo("5");

function addTwoTS(num: number) {
  num.toUpperCase();
  return num + 2;
}

addTwoTS(5);
addTwoTS("5");

function getUpper(val) {
  return val.toUpperCase();
}

getUpper(5); // No error when passing a number

function getUpperTS(val: string) {
  return val.toUpperCase();
}

getUpperTS(5);

function signUpUser(name: string, email: string, isPaid: boolean) {
  // Sign up user
}

signUpUser(1, 2, 3);
signUpUser("aaron", 2, 3);
signUpUser("aaron", "mail@io", 3);
signUpUser("aaron", "mail@.io", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; // Default value for isPaid so it is optional

loginUser("h", "a@a");

function reverse(val: string): string {
  //  Accepts a string and returns a string
  // return val.split("").reverse().join("");
  return 0;
}

//Union types
let number: number | string = 5;
number = "5";

const add = (a: number | string, b: number | string): number | string => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Please provide two numbers";
};

add(5, 5); // No error
add("5", "5"); // No error

// Void
const consoleError = (message: string): void => {
  // Void means that the function can return undefined or null
  console.error(message);
};

//never
const throwError = (message: string): never => {
  // Never means that the function never returns anything, not even undefined or null
  throw new Error(message);
};

export {};
