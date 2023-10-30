// simple class
class Video {
  private _producer: string = "";
  static medium: string = "Audio/Visual"; // static class property

  // getter method
  get producer(): string {
    return this._producer.toUpperCase();
  }

  // setter method
  set producer(newProducer: string) {
    this._producer = newProducer;
  }

  // constructor that takes arguments
  constructor(public title: string, protected year: number) {
    console.log("Creating a new Video...");
  }

  // class method
  printItem(): void {
    console.log(`${this.title} was released in ${this.year}.`);
    console.log(`Medium is ${Video.medium}`); // using the static class property
  }
}

// create an object
let vidOne = new Video("Men in Black", 1997);
vidOne.printItem();

// using getter and setters
vidOne.producer = "Walter Parkes";
console.log(vidOne.producer);

// inheritance
class Documentary extends Video {
  constructor(newTitle: string, newYear: number, public subject: string) {
    super(newTitle, newYear); // arguments passed to parent constructor
  }

  // override parent class method
  printItem(): void {
    super.printItem(); // calls the parent method (optional)
    console.log(`Subject: ${this.subject} (${this.year})`);
  }
}

// create a object
let vidTwo = new Documentary("The History of Movies", 2024, "Facts");
vidTwo.printItem(); // override parent method

// class that uses generics. Set the property + method data type.
export class Favorites<T> {
  private _items: Array<T> = new Array<T>();

  add(item: T): void {
    this._items.push(item);
  }

  getFirst(): T {
    return this._items[0];
  }
}
