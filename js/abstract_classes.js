"use strict";
// abstract class
class VideoAbs {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = "";
    }
    // abstract method with implementation
    printItem() {
        console.log(`${this.title} was released in ${this.year}.`);
        console.log(`Medium is ${VideoAbs.medium}`);
    }
}
VideoAbs.medium = "Audio/Visual";
class DocumentaryAbs extends VideoAbs {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear); // pass properties to the abstract class constructor
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
    // implementation for abstract class method
    printCredits() {
        console.log(`Producer: ${this.producer}`);
    }
}
// create an object
let vid = new DocumentaryAbs("The History of Movies", 2024, "Facts");
vid.producer = "Disney";
vid.printItem();
vid.printCredits(); // use abstract method
