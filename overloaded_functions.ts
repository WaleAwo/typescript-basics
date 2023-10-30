// a function that returns an array of movie objects
export function getAllMovies2() {
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

// overloaded functions
export function getTitles(director: string): string[];
export function getTitles(director: string, streaming: boolean): string[];

// implementation to use the overloaded functions
export function getTitles(director: string, streaming?: boolean): string[] {
  const allMovies = getAllMovies2(); // store all movie objects
  const searchResults: string[] = []; // store matching results

  // return overloaded function if all parameters are passed
  if (streaming !== undefined) {
    for (let movie of allMovies) {
      if (movie.director === director && movie.streaming === streaming) {
        searchResults.push(movie.title);
      }
    }
  } else {
    for (let movie of allMovies) {
      if (movie.director === director) {
        searchResults.push(movie.title);
      }
    }
  }
  return searchResults;
}

// using the overloaded function
let movies: string[] = getTitles("George Lucas");
movies.forEach((title) => console.log(title));
