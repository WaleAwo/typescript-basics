"use strict";
// set the function type as a generic type
// use the specified generic as the function parameter and return type
function logAndReturn(thing) {
    console.log(thing);
    return thing;
}
// using generics with the types
let someString = logAndReturn("this is a generic string");
let someNumber = logAndReturn(34);
// using the interface with a generic
// let bookInventory: Inventory<String>;
// let allBooks: Array<String> = bookInventory.getAllItems();
// set the class type as a generic type
// use the specified generic type with interface type, object property and functions
// class Catalog<T> implements Inventory<T> {
//   private catalogItems = new Array<T>();
//   addItem(newItem: T) {
//     this.catalogItems.push(newItem);
//   }
// }
// creating a class object with a generic type
// let bookCatalog = new Catalog<String>();
