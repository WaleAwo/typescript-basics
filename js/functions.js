"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purge = exports.GetReview = exports.getAllMovies = void 0;
// a function with an optional parameter
function printMovieInformation(title, yearReleased) {
    console.log(`Title: ${title}`);
    if (yearReleased) {
        console.log(`Year Released: ${yearReleased}`); // if the optional parameter is passed
    }
}
printMovieInformation("Coming to America", 1988);
// a function with a default value
function printMovieRating(title, rating = "Good") {
    console.log(`Title: ${title}`);
    console.log(`Rating: ${rating}`);
}
printMovieRating("Coming 2 America"); // default value will be displayed
// a function that takes an array of values (rest parameters)
function printMovieCast(title, ...cast) {
    console.log(`Title: ${title}`);
    console.log(`Cast:`);
    // print all array items
    for (const name of cast) {
        console.log(` ${name}`);
    }
}
printMovieCast("Coming to America", "Eddie Murphy", "Arsenio Hall");
// a function that uses an interface as a return type (type checking).
function getAllMovies() {
    return [
        {
            title: "Coming to America",
            director: "John Landis",
            yearReleased: 1988,
            streaming: true,
        },
        {
            title: "The Empire Strikes Back",
            director: "Irvin Kershner",
            yearReleased: 1980,
            streaming: false,
        },
        {
            title: "The Last Jedi",
            director: "Rian Johnson",
            yearReleased: 2017,
            streaming: true,
        },
    ];
}
exports.getAllMovies = getAllMovies;
// a function that returns either a string or number (union type)
function GetReview(title) {
    if (title == "A New Hope 2") {
        return "An instant classic"; // string
    }
    else {
        return Math.floor(Math.random() * 10); // number
    }
}
exports.GetReview = GetReview;
// using generics for a function type
function purge(inventory) {
    // returns the first 3 items from the array
    return inventory.splice(3, inventory.length);
}
exports.purge = purge;
