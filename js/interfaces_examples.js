"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myMovie = {
    title: "Toy Story",
    director: "John Lasseter",
    yearReleased: 1995,
    streaming: true,
    genre: "animation",
    previouslyViewed: true,
};
// function parameter using an interface
function getMovieInformation(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
// an object being typed checked by an interface
getMovieInformation(myMovie);
// a object implementing an interface
let anotherMovie = {
    title: "A Bugs Life",
    director: "John Lasseter",
    yearReleased: 1999,
    streaming: false,
    logReview: (review) => console.log(`Review: ${review}`), // implements method
};
// using an implemented interface method
if (anotherMovie.logReview) {
    anotherMovie.logReview("A great film");
}
// implementing an interface function type
let printReview;
printReview = (review) => console.log(`Viewer review: ${review}`);
printReview("printing review");
// inherited interfaces
let favoriteDirector = {
    name: "John Lucas",
    email: "jl@johnlucas.com",
    numMoviesDirected: 4,
};
// a class that implements an interface
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`);
    }
}
// creating an object
let castMemberOne = new Performer();
// define the object properties and methods
castMemberOne.name = "Jane Doe";
castMemberOne.rehearse(24);
