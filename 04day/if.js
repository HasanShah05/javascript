//if conditiom

let num = prompt('Enter a number from 0 to 10')
if (num < 10) {
  console.log('Correct number!!!')
}

//if-else conditions
//example one:-

let name = prompt('Enter your name:')
if (name) {
  console.log(`Your name is ${name}`)
}
else {
  console.log('Please Enter your name!')
}

//example two:-
let num1 = prompt('Enter a number from 0 to 10')
if (num1 < 10) {
  console.log('The number is between 0 to 10.')
}
else {
  console.log('Entered number is bigger than 10.')
}

//if else if else conditions
//example one:-

let num2 = prompt('Enter any negative or positive no')
if (num2 > 0){
  console.log(`${num2}, is a positive number.`)
}
else if (num2 < 0 ){
  console.log(`${num2},is negative number.`)
}
else if (num == 0){
  console.log(`${num2}, is equal to zero.`)
}
else {
  console.log('Please enter a number!!')
}

//switch
//ecample:-

let userInputDay = prompt('Enter a day of week.')
let day = userInputDay.toLowerCase()

switch (day){
  case 'monday':
    console.log('Today is monday.')
    break
  case 'tuesday':
    console.log('Today is Tuesday.')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'Thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('Its not a week day!!')
}

//ternary opreater
//example:-

let isRaining = true
? console.log('dont forgot your raincoat')
: console.log('no need to take raincoat')

isRaining = false
? console.log('dont forgot your raincoat')
: console.log('no need to take raincoat')