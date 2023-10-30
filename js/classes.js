"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
// simple class
class Video {
    // getter method
    get producer() {
        return this._producer.toUpperCase();
    }
    // setter method
    set producer(newProducer) {
        this._producer = newProducer;
    }
    // constructor that takes arguments
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = "";
        console.log("Creating a new Video...");
    }
    // class method
    printItem() {
        console.log(`${this.title} was released in ${this.year}.`);
        console.log(`Medium is ${Video.medium}`); // using the static property
    }
}
Video.medium = "Audio/Visual"; // static property
// create an object
let vidOne = new Video("Men in Black", 1997);
vidOne.printItem();
// using getter and setters
vidOne.producer = "Walter Parkes";
console.log(vidOne.producer);
// inheritance
class Documentary extends Video {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear); // arguments passed to parent constructor
        this.subject = subject;
    }
    // override parent class method
    printItem() {
        super.printItem(); // calls the parent method (optional)
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
}
// create a object
let vidTwo = new Documentary("The History of Movies", 2024, "Facts");
vidTwo.printItem(); // override parent method
// class that uses generics
class Favorites {
    constructor() {
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
}
exports.Favorites = Favorites;
