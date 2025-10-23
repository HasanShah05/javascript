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
else{
  console.log('I am older than you')
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