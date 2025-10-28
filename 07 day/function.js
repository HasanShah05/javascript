//funtion without parameter.

function square() {
  let num = 2;
  let sum = num * num;
  console.log(sum);

}
square();

//function without parameter returning a value.

function fullName() {
  let firstName = 'Hasan';
  let lastName = 'shah';
  let space = ' ';
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(fullName());

//function with one parameter.
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
console.log(areaOfCircle(2));

//function with two parameters.

function sumOfTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}
sumOfTwoNumbers(10, 20);

//function with many parameters.

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
const numbers = [1,2,3,4,5];
sumOfArray(numbers);

//function with unlimited parameters.

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum);
  
}
sumAllNums(1,2,3,4,5,6,7,8,9,10);

//function with unlimited parameters arrow functions.

const sumOfNo = (...has) => {
  let sum = 0;
  for (const numbers of has) {
    sum += numbers;
    
  }
  return sum;
}
console.log(sumOfNo(1,2,3,4));

