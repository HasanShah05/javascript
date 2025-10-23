//QUESTION NO 1

let n = 12;
let id = '';
const characters = "abcdefghijklmnopqrstuvwxyz0123456789"
for (let i = 1; i <= n; i++) {
  let num = Math.floor(Math.random() * characters.length)
  id += characters[num]
}
console.log(id);

//QUEATION NO 2

let hexcode = '';
const characters2 = '0123456789abcdef'
for (let i = 0; i <= 5; i++) {
  let num2 = Math.floor(Math.random() * characters2.length)
  hexcode += characters2[num2];
  
}
console.log('#' + hexcode);

//QUESTION NO 3

let value = [];
for (let i = 0; i <= 3; i++) {
  let rgb = Math.floor(Math.random() * 256)
  value.push(rgb);
  
}
console.log(`rgb(${value[0]}, ${value[1]}, ${value[2]})`);

//QUESTION NO 4

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let upper = [];

for (let i = 0; i < countries.length; i++) {
  upper.push(countries[i].toUpperCase())
  
}
console.log(upper);


//QUESTION NO 5
let numbers = [];
for (let i = 0; i < countries.length; i++) {
  numbers.push(countries[i].length)
  
}
console.log(numbers);

//QUESTION NO 6

let data = [];
for (const country of countries) {
  const countrycode = country.substring(0,3);
  const code = country.length
  data.push([country,countrycode,code])
}
console.log(data);

//QUESTION NO 7

let land = [];
for (const country of countries) {
  if (country.includes('land')) {
    land.push(country);
    }
  else{
    console.log('These countries are without land');
    }
}
console.log(land);

//QUESTION NO 8

let ia = []
for (const country of countries) {
  if (country.includes('ia')) {
    ia.push(country)
  }
  else{
    console.log("These countries are without ia");
    
  }
}
console.log(ia);

//QUESTION NO 9


let longestCountry = ''; // Initialize with an empty string
let maxLength = 0; // Initialize with 0

for (const country of countries) {
  if (country.length > maxLength) {
    maxLength = country.length;
    longestCountry = country;
  }
}

console.log(longestCountry);

//QUESTION NO 10
let names = []
let size = 5;
for (const country of countries) {
  if (country.length == size) {
    names.push(country)
    
  }
}
console.log(names);

//QUESTION NO 11

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let maxlength = 0;
let longestname = '';
for (const languages of webTechs) {
  if (languages.length > maxLength) {
    maxLength = languages.length
    longestname = languages;
  }
}
console.log(longestname);

//QUATION NO 12

let ans = [];
for (const languages of webTechs) {
  const code = languages.length
  ans.push([languages,code])

}
console.log(ans);

//QUESTION NO 13

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let acronym = '';
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0]
}
console.log(acronym);

//QUESTION NO 14

const languages =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
  
}

//QUESTION NO 15

const fruits =  ['banana', 'orange', 'mango', 'lemon'];
let order = [];

for (let i = fruits.length -1; i >= 0; i--) {
  order.push(fruits[i])
  
}
console.log(order);

//QUESTION NO 16

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
let out = ''
  for (let i = 0; i < fullStack.length; i++) {
    out += fullStack[i]
  }
  console.log(out);
  