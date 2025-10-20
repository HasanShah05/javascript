//QUESTION NO 1

function fullName() {
    let firstName = 'Hasan';
    let space = ' '
    let lastName = 'Shah';
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(fullName());

//QUESTION NO 2

function fName(firstName, lastName) {
    return `${firstName}  ${lastName}`
}
console.log(fName("hussain", 'radhanpara'));

//QUESTION NO 3

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
    
}
addNumbers(3,2)

//QUESTION NO 4

function areaOfRectangle() {
    let l = 5;
    let w = 10;
    let a = l * w;
    return a;
}
console.log(areaOfRectangle());

//QUESTION NO 5

function perimeterOfRectangle() {
    let l = 5;
    let w = 10;
    let p = 2 * (l + w);
    console.log(p);
    
}
perimeterOfRectangle();

//QUESTION NO 6

function prism() {
    let l = 5;
    let w = 10;
    let h = 15;
    let p = l * w * h;
    return p;
}
console.log(prism());

//QUESTION NO 7

function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(5));

//QUESTION NO 8

function circumfrenceOfCircle(r) {
    let circumfrence = 2 * Math.PI * r;
    return circumfrence;

}
console.log(circumfrenceOfCircle(5));

//QUESTION NO 9

function density() {
    let mass = 45;
    let volume = 30.3;
    let d = mass / volume;
    console.log(d);
     
}
density();

//QUESTION NO 10

function speed() {
    let distance = 23;
    let time = 2;
    let s = distance / time;
    return s;
}
console.log(speed());

//QUESTION NO 11

function weight() {
    let mass = 67.3;
    let gravity = 9.81;
    let w = mass * gravity;
    return w;
}
console.log(weight());

//QUESTION NO 12

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // 
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
