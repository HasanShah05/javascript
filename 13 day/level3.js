//Question no 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//While loop

console.time("While loop");
let i = 0;
while (i < Array.length) {
  console.log(i);
  i++;
}
console.timeEnd("While loop");

//For loop

console.time("For loop");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.timeEnd("For loop");

//For Of loop

console.time("for of loop");
let sum = 0;
for (const num of numbers) {
  sum += num;
  console.log(sum);
}
console.timeEnd("for of loop");

//For Each loop

console.time("ForEach Loop");
numbers.forEach((x) => console.log(x));
console.timeEnd(`ForEach Loop`);
