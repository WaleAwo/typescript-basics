import { Movie } from "./interfaces";

// a function with an optional parameter
function printMovieInformation(title: string, yearReleased?: number): void {
  console.log(`Title: ${title}`);
  if (yearReleased) {
    console.log(`Year Released: ${yearReleased}`); // if the optional parameter is passed
  }
}

printMovieInformation("Coming to America", 1988);

// a function with a default value
function printMovieRating(title: string, rating: string = "Good"): void {
  console.log(`Title: ${title}`);
  console.log(`Rating: ${rating}`);
}

printMovieRating("Coming 2 America"); // default value will be displayed

// a function that takes an array of values (rest parameters)
// rest parameters should be the last parameter passed 
function printMovieCast(title: string, ...cast: string[]) {
  console.log(`Title: ${title}`);
  console.log(`Cast:`);

  // print all array items
  for (const name of cast) {
    console.log(` ${name}`);
  }
}

printMovieCast("Coming to America", "Eddie Murphy", "Arsenio Hall");

// a function that uses an interface as a return type (type checking).
export function getAllMovies(): Movie[] {
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

// a function that returns either a string or number (union type)
export function GetReview(title: string): string | number {
  if (title == "A New Hope 2") {
    return "An instant classic"; // string
  } else {
    return Math.floor(Math.random() * 10); // number
  }
}

// using generics for a function type
// specify the parameter and return type
export function purge<T>(inventory: Array<T>): Array<T> {
  // returns the first 3 items from the array
  return inventory.splice(3, inventory.length);
}
