// abstract class
abstract class VideoAbs {
  private _producer: string = "";
  static medium: string = "Audio/Visual";

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(newProducer: string) {
    this._producer = newProducer;
  }

  constructor(public title: string, protected year: number) {}

  // abstract method with implementation
  printItem(): void {
    console.log(`${this.title} was released in ${this.year}.`);
    console.log(`Medium is ${VideoAbs.medium}`);
  }

  // abstract method with no implementation
  abstract printCredits(): void;
}

class DocumentaryAbs extends VideoAbs {
  constructor(newTitle: string, newYear: number, public subject: string) {
    super(newTitle, newYear); // pass properties to the abstract class constructor
  }

  printItem(): void {
    super.printItem();
    console.log(`Subject: ${this.subject} (${this.year})`);
  }

  // implementation for abstract class method
  printCredits(): void {
    console.log(`Producer: ${this.producer}`);
  }
}

// create an object
let vid = new DocumentaryAbs("The History of Movies", 2024, "Facts");

vid.producer = "Disney";
vid.printItem();
vid.printCredits(); // use abstract method
