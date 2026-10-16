/*
const userName = "talha";
const af = Array.from(userName);
const userNameArray = Array.from(userName, (character) => {
  return character.toUpperCase();
});

console.log(af);
console.log(userNameArray);

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

console.log(items);

// filter Method
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

// map Method
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

// find Method
const foundItem = items.find((item) => {
  return item.name === "Book";
});
console.log(foundItem);

// forEach Method (does not return anything)
items.forEach((item) => {
  console.log(item.name, item.price);
});

// some Method (if any 1 item is TRUE, it returns true)
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});
console.log(hasInexpensiveItems);

// every Method (if every items return TRUE, it returns true )
const hasAllInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});
console.log(hasAllInexpensiveItems);

// reduce Method (takes 2 parameters and adds them all up)
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

// includes Method
const items2 = [1, 2, 3, 4, 5];
const includesTwo = items2.includes(2);
console.log(includesTwo);
*/
/*
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log(`This is in the then ${message}`);
}).catch((message) => {
  console.log(`This is in the catch ${message}`);
});
*/

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.info(`This is in the then ${message}`);
}).catch((error) => {
  console.error(`This is in the catch ${error}`);
});
