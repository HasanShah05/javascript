let firstName = 'hasan';
let lastName = 'shah';
let space = ' ';
let country = 'india'
let age = 20;
let prefession = 'student';

let fullName = firstName + space + lastName;
console.log(`i am ${fullName}.`);

let personOneInfo = fullName + ', I am ' + age + ' years old.' + ' I live in ' + country;
console.log(personOneInfo);

let a = 2;
let b = 3;
console.log(`The sum of ${a} + ${b} is ${a + b}`);
console.log(`${a} is greater than ${b}: ${a > b}`);
console.log(firstName.length);

let string = 'Javascript';
let lastIndex = string.length - 2;
console.log(string[lastIndex]);
let thirdLetter = string[2];
console.log(thirdLetter)

console.log(lastName.toUpperCase());
console.log(string.toLowerCase())

console.log(country.substr(1, 10))
console.log(string.substring(2,7))

console.log(firstName.split())
 let title = '       30 days of javascript'
 console.log(title)
 console.log(title.trim())

console.log(title.includes('z'))
console.log(title.replace('javascript', 'python'))
console.log(country.replace('india', 'indiana'))

console.log(lastName.charCodeAt(0))

let sentence = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sentence.match('/love/gi'))

let pattern = /javascript/gi
console.log(sentence.match(pattern))   

console.log(title.repeat(10))

let num = '10';
console.log(num);

let numInt = Number(num);
console.log(numInt)

let naam = 9.81
let naamInt = parseInt(naam);
console.log(naamInt)