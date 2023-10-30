import { Favorites } from "./classes"
import { purge } from "./functions"
import { Movie } from "./interfaces"
import { getAllMovies2 } from "./overloaded_functions"

let inventory: Array<Movie> = getAllMovies2()

// using the function generic
let result: Array<Movie> = purge<Movie>(inventory)
result.forEach(movie => console.log(movie.title))

// using generics with a class
let favoriteMovies: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favoriteMovies.add(movie));

let firstFave: Movie = favoriteMovies.getFirst()
console.log(firstFave)