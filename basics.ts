import { GetReview } from "./functions";

// declare a simple variable
let movieTitle: string = "A New Hope";

// store a return value in a union type
let movieReview: string | number = GetReview(movieTitle);

// display value based on data type
if (typeof movieReview == "string") {
  console.log(`Review : ${movieReview}`);
} else {
  console.log(`Rating: ${movieReview}/10`);
}

// declare a constant variable
const age: number = 21;

// a variable that has a union type. It can either be a string or number.
let rating: string | number;

// template literal
console.log(`Movie title: ${movieTitle}`);

// declare an array
let strArray: string[] = ["here", "are", "strings"];

// an array using the 'any' data type - avoid using the 'any' data typ where possible
let anyArray: any[] = ["car", false, 23];
