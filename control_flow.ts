// basic for loop
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is event`);
  } else {
    console.log(`${i} is not event`);
  }
}

// basic while loop
let j: number = 1;
while (j <= 10) {
  console.log(`${j}`);
  j++;
}

// basic switch/case
let fruit: string = "apple";
switch (fruit) {
  case "orange":
    console.log(`${fruit} is not an apple.`);
    break;
  case "banana":
    console.log(`${fruit} is not an apple`);
    break;
  case "apple":
    console.log(`${fruit} is an apple.`);
    break;
  default:
    console.log(`${fruit} is unknown.`);
}
