import { Movie, Logger, Director, CastMember as Actor } from "./interfaces";

let myMovie = {
  title: "Toy Story",
  director: "John Lasseter",
  yearReleased: 1995,
  streaming: true,
  genre: "animation",
  previouslyViewed: true,
};

// function using an interface as the parameter type
function getMovieInformation(movie: Movie) {
  console.log(`Title: ${movie.title}`);
  console.log(`Year Released: ${movie.yearReleased}`);
  console.log(`Director: ${movie.director}`);
}

getMovieInformation(myMovie);

// a object implementing an interface
let anotherMovie: Movie = {
  title: "A Bugs Life",
  director: "John Lasseter",
  yearReleased: 1999,
  streaming: false,
  logReview: (review: string) => console.log(`Review: ${review}`), // implements method
};

// using an implemented interface method
if (anotherMovie.logReview) {
  anotherMovie.logReview("A great film");
}

// implementing an interface function type
let printReview: Logger;
printReview = (review: string) => console.log(`Viewer review: ${review}`);
printReview("printing review");

// inherited interfaces
let favoriteDirector: Director = {
  name: "John Lucas",
  email: "jl@johnlucas.com",
  numMoviesDirected: 4,
};

// a class that implements an interface
class Performer implements Actor {
  name: string = "";
  email: string = "";
  role: string = "";
  rehearse(sceneNumber: number): void {
    console.log(`${this.name} is rehearsing scene number ${sceneNumber}.`);
  }
}

// creating an object
let castMemberOne: Actor = new Performer();

// define the object properties and methods
castMemberOne.name = "Jane Doe";
castMemberOne.rehearse(24);
