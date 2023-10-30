"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitles = exports.getAllMovies2 = void 0;
// a function that returns an array of movie objects
function getAllMovies2() {
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
        {
            title: "Attack of the Clones",
            director: "George Lucas",
            yearReleased: 2002,
            streaming: true,
        },
        {
            title: "The Phantom Menace",
            director: "George Lucas",
            yearReleased: 1999,
            streaming: true,
        },
        {
            title: "Focus",
            director: "Glenn Ficarra",
            yearReleased: 2015,
            streaming: true,
        },
        {
            title: "Yardie",
            director: "Idris Elba",
            yearReleased: 2018,
            streaming: true,
        },
    ];
}
exports.getAllMovies2 = getAllMovies2;
// implementation to use the overloaded functions
function getTitles(director, streaming) {
    const allMovies = getAllMovies2(); // store all movie objects
    const searchResults = []; // store matching results
    // return overloaded function if all parameters are passed
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
exports.getTitles = getTitles;
// using the overloaded function
let movies = getTitles("George Lucas");
movies.forEach((title) => console.log(title));
