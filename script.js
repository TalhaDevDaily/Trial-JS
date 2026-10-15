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

const userName = "talha";
const userNameArray = Array.from(userName, (character) => {
  return character.toUpperCase();
});

console.log(userNameArray);
