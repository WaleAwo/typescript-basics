"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
// declare a simple variable
let movieTitle = "A New Hope";
// store a return value in a union type
let movieReview = (0, functions_1.GetReview)(movieTitle);
// display value based on data type
if (typeof movieReview == "string") {
    console.log(`Review : ${movieReview}`);
}
else {
    console.log(`Rating: ${movieReview}/10`);
}
// declare a constant variable
const age = 21;
// a variable that has a union type. It can either be a string or number.
let rating;
// template literal
console.log(`Movie title: ${movieTitle}`);
// declare an array
let strArray = ["here", "are", "strings"];
// an array using the 'any' data type - avoid using the 'any' data typ where possible
let anyArray = ["car", false, 23];
