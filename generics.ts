// uses the specified generic data type as the function parameter and return type
function logAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}

// using generics with the types
let someString: string = logAndReturn<string>("this is a generic string");
let someNumber: number = logAndReturn<number>(34);

// uses the specified generic data type for the interfaces properties and methods
interface Inventory<T> {
  getNewestItem: () => T; // returns item with generic type
  addItem: (newItem: T) => void; // takes a parameter of the generic type
  getAllItems: () => Array<T>; // returns am array of the generic type
}

// using an interface with generics
// let bookInventory: Inventory<String>;
// let allBooks: Array<String> = bookInventory.getAllItems();
