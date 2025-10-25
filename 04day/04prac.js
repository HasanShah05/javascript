//question no 1

let age = prompt('Enter your age:')
if (age >= 18){
  console.log('you are old enough to drive.')
}
else if(age < 18){
  console.log(`you are left with ${18 - age} years to drive.`)
}
else{
  console.log('Enter a correct age.')
}

//question no 2

let myAge = 20;
let yourAge = prompt('Enter your age:')
if (yourAge > myAge){
  console.log(`you are ${yourAge - myAge} years older than me!`)
}
else if (yourAge < myAge) {
  console.log(`i am ${myAge - yourAge} years older than you`);
  
}
else{
  console.log('Enter correct age.')
}

//question no 3

let a = 4
let b = 3
if (a > b){
  console.log(`${a} is greater than ${b}.`)
}
else{
  console.log(`${b} is greater than ${a}.`)
}

//question no 4
let num = prompt('Enter any number to check if its even')
if (num % 2 == 0){
  console.log(`${num}, is an even number.`)
}
else{
  console.log(`${num}, is not an even number.`)
}

//LEVEL 2
//question no 1

let score = prompt('Enter your score here:')
switch (true){
  case (score <= 100 && score >= 80):
    console.log('you got A grade')
    break
  case (score <= 89 && score >= 70):
    console.log('You got B grade')
    break
  case (score <= 69 && score >= 60):
    console.log('You got C grade')
    break
  case (score <= 59 && score >= 50):
    console.log('you got D grade')
    break
  case (score <= 49 && score > 0):
    console.log('oh no you got F grade')
    break
  default:
    console.log('INVALID SCORE')
}

//question no 2

let monthInput = prompt('Enter a month to check season.')
monthInput = monthInput.toLowerCase()
if (monthInput === 'september' || monthInput === 'october' || monthInput === 'november' ) {
    console.log('The season is Autumn');
}
else if (monthInput === 'december' || monthInput === 'january' || monthInput === 'febuary') {
  console.log('The seaon is Winter');
}
else if (monthInput === 'june' || monthInput === 'july' || monthInput === 'august') {
  console.log('The season is Summer');
}

//qustion no 3

let dayInput = prompt('What day is today?')
let day = dayInput.toLowerCase()

switch (day) {
  case 'sunday':
  case 'saturday':
    console.log(`${day} is a weekend`);
    break
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log(`${day} is a working day.`);
    break
  default:
    console.log('Enter a vlid day');
}

//LEVEL 3

//question no 1

let monthInput1 = prompt("Enter a month.")
let month = monthInput1.toLowerCase()

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${month} has 31 days.`);
    break
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${month} has 30 days.`);
  break
  case 'febuary':
    console.log(`${month} has 28 days.`);
    break
  default:
    console.log('Enter a valid month.');
}