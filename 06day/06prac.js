//LEVEL NO 1
//question no 1

// for (let i = 0; i <= 10 ; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++
// }

// let i = 0;
// do {
//   console.log(i);
//   i++
  
// } while (i <= 10);

//QUESTION NO 2

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--
// }

// let i = 10;
// do {
//   console.log(i);
//   i--
  
// } while (i >= 10);

//QUESTION NO 3

// let n = prompt("Enter a number for forloop");
// for (let i = 0; i <= n; i++) {
//   console.log(i);  
// }

//QUESTION NO 4

// for (let i = 1; i <= 7; i++) {
//   let hashPattern = "";
//   for (let j = 1; j <= i; j++) {
//     hashPattern += "#";
//   }
//   console.log(hashPattern);
// }

//QUESTION NO 5

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " x " + i + " = " + (i*i));
// }

//QUESTION NO 6

// for (let i = 0; i <= 10; i++) {
//   console.log(i , i**2 , i**3); 
// }

//QUESTION NO 7

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }  
// }

//QUESTION NO 8

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0) {
//     console.log(i); 
//   }
// }

//QUESTION NO 10

// let sum = 0
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
  
// }
// console.log(sum);

//QUESTION NO 11

let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even = even + i; 
  }
  else if (i % 2 == 1) {
    odd = odd + i;  
}
}
console.log("The sum of even numbers is " + even + ". The sum of odd numbers if " + odd + ".")

//QUESTION NO 12

let myArray = [even, odd]
console.log(myArray);

//QUESTION NO 13

// let random = [];
// for (let i = 1; i <= 5; i++) {
//   let num = Math.floor(Math.random()* 101);
//   random.push(num)
  
// }
// console.log(random);

//QUESTION NO 14

let random = [];
for (let i = 1; i <= 5; i++) {
  let num = Math.floor(Math.random()* 101);
  if (!random.includes(num)) {
    random.push(num)
  }
  
  
}
console.log(random);

//QUESTION NO 15

let id = '';
const characters = 'abcdefghijklmnopqrstuwxyz0987654321'
for (let i = 0; i <= 6; i++) {
  let char = Math.floor(Math.random() * characters.length)
  id += characters[char]
}
console.log(id);
