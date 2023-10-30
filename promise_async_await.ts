import { getTitles } from "./overloaded_functions";

// function that uses a promise as a return type
// the promise returns an array of strings
// promise constructor takes 2 arguments
function getMoviesByDirector(director: string): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundMovies: string[] = getTitles(director);

      if (foundMovies.length > 0) {
        resolve(foundMovies);
      } else {
        reject("No movies found for that director.");
      }
    }, 2000);
  });
  return p;
}

// using async/await for promise functions
async function logSearchResults(director: string) {
  let foundMovies = await getMoviesByDirector(director);
  console.log(foundMovies);
}

// execution
console.log("Beginning search...");
logSearchResults("John Landis").catch((reason) => console.log(reason));
console.log("Search submitted...");
