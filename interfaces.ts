// an interface with properties + function data types
interface Movie {
  title: string;
  director: string;
  yearReleased: number;
  streaming: boolean;
  logReview?: ReviewLogger; // optional parameter
}

// a reusable interface function type that takes a string
interface ReviewLogger {
  (review: string): void;
}

// EXTENDING INTERFACES //
interface Person {
  name: string;
  email: string;
}

interface Director extends Person {
  numMoviesDirected: number;
}

interface CastMember extends Person {
  role: string;
  rehearse: (sceneNumber: number) => void;
}

export { Movie, ReviewLogger as Logger, Person, Director, CastMember };
