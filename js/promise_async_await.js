"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const overloaded_functions_1 = require("./overloaded_functions");
// function that uses a promise as return type
// the promise returns an array of strings
// promise constructor take a arrow function that takes 2 arguments
function getMoviesByDirector(director) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundMovies = (0, overloaded_functions_1.getTitles)(director);
            if (foundMovies.length > 0) {
                resolve(foundMovies);
            }
            else {
                reject("No movies found for that director.");
            }
        }, 2000);
    });
    return p;
}
// using async/await for promise functions
function logSearchResults(director) {
    return __awaiter(this, void 0, void 0, function* () {
        let foundMovies = yield getMoviesByDirector(director);
        console.log(foundMovies);
    });
}
// execution
console.log("Beginning search...");
logSearchResults("John Landis").catch((reason) => console.log(reason));
console.log("Search submitted...");
