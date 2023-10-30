"use strict";
// normal function
function normalLogMessage(message) {
    console.log(message);
}
// arrow functions
/*
  1. arrow functions have no designated function name
  2. arrow functions are assigned to a variables
  3. arrow functions don't use the 'function' keyword
  */
// implementing an arrow function
const arrowLogMessage = (message) => console.log(message);
arrowLogMessage("Calling an arrow function");
// // arrow function with more than one parameter
// const addNumbers = (numOne: number, numTwo: number): number => {
//   let result = numOne + numTwo;
//   return result;
// };
// let resultNum = addNumbers(12, 23)
// console.log(resultNum)
