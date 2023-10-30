"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const functions_1 = require("./functions");
const overloaded_functions_1 = require("./overloaded_functions");
let inventory = (0, overloaded_functions_1.getAllMovies2)();
// using the function generic
let result = (0, functions_1.purge)(inventory);
result.forEach(movie => console.log(movie.title));
// using generics with a class
let favoriteMovies = new classes_1.Favorites();
inventory.forEach(movie => favoriteMovies.add(movie));
let firstFave = favoriteMovies.getFirst();
console.log(firstFave);
