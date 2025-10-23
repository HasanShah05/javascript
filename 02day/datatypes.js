//primitive data type

let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);
let js = 'javascript';
let py = 'python';
console.log(js == py);

//non-primitive data types

let nums = [1, 2, 3];
nums[1] = 10;
console.log(nums);
let letters = ['a', 'b', 'c'];
letters[0] = 'z';
console.log(letters)
let userOne = {
  name: 'hasan',
  task: 'trainee',
  live: 'mumbai'
}
let userTwo = userOne;
console.log(userTwo);

//number data types

let age = 20;
let mass = 30;
const PI = 3.14;
const gravity = 9.81;
const boilingpoint = 100;
console.log(age, mass, PI, gravity, boilingpoint);

//math objects

const Pi = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.ceil(PI));
console.log(Math.min(-5, -2, 2, 10));
console.log(Math.max(-2, 2, 5, 20));

const rndNum = Math.random();
console.log(rndNum);

console.log(Math.sqrt(16));
console.log(Math.pow(2, 4));
console.log(Math.sin(40))
