//LEVEL 1
//question no 1

let firstName = 'Hasan'
let lastName = 'Shah'
let country = 'India'
let city = 'Mumbai'
let age = 20
let isMarried = false
let year = 2025
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof country)
console.log(typeof city)
console.log(typeof year);

//question no 2

console.log(typeof '10' == 10)

//question 3

console.log(parseInt(9.81) == 10)

//qyestion no 4

console.log(Boolean(10))
console.log(Boolean('hasan'))
console.log(Boolean('0'))

console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))

//question no 5

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 30)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//question no 6

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let word1 = 'puthon'
let word2 = 'dragon'
console.log(word1.includes('on') && word2.includes('on'));


//question no 7
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//LEVEL 2
//question no 1

let height = prompt('Enter hright')
let base = prompt('Enter base')
let areaoftraingle = 0.5 * base * height
 console.log(`the area of trianlge is:${areaoftraingle}`) 

//question no 2

let a = prompt('Enter side a')
let b = prompt('Enter side b') 
let c = prompt('Enter side c')
let primeter = parseFloat(a) + parseFloat(b) + parseFloat(c)
console.log(primeter)

//question no 3

let length = prompt('Enter length')
let width = prompt('Enter width')
let areaodrect = parseFloat(length) * parseFloat(width)
let perimeter = 2 * (parseFloat(length) + parseFloat(width))
console.log(areaodrect)
console.log(perimeter)

//question no 4

const PI = 3.14;
const radius = prompt('Enter radius');
const areaofcircle = PI * radius * radius;
console.log(areaofcircle)
console.log(`The value of PI is ${PI}. The radius of circle is ${radius}. The area of circle is ${areaofcircle}.`)

//question no 5

let m = 2;

let yIntercept = 2 * 0 - 2; // = -2

let xIntercept = (0 + 2) / 2; // = 1

console.log("Slope:", m);
console.log("Y-Intercept:", yIntercept);
console.log("X-Intercept:", xIntercept);

//question no 6



//question no 7



//question no 8



//question no 9

let hours = prompt('Enter hours')
let rate = prompt('Enter rate per hour')
let earning = parseFloat(hours) * parseFloat(rate)
console.log(earning)

//question no 10

let name = prompt('Enter your name')
name.length > 7
? console.log('Your name is too long')
: console.log('your name is too short')

//question no 11

let fName = 'Asabeneh'
let lName = 'Yetayeh'
fName < lName
? console.log(`Your first name ${fName} is longer than your Family Name, ${lName}`)
: console.log(`Your first name ${fName} is shorter than your Family Name, ${lName}`);

//question no 12

let myAge = 250
let yourAge = 25
let ageDifference = myAge - yourAge

//question no 13

let yearBornIn = prompt('Enter the year you were born.')
let yearBorn = parseInt(yearBornIn)
let age1 = 2025 - yearBorn
if (age1 >= 18) {
    console.log(`you are ${age1}. you are old enough to drive.`);
}
else{
    console.log(`you are ${age1}. you will be allowed to drive in ${18 - age1} years.`);
}

//question no 14

let yearIn = prompt("enter the number of you lived.")
let years = parseInt(yearIn)
let secondslived = 365 * 24 * 60 * 60
let totalSeconds = years * secondslived
console.log(`You lived ${totalSeconds}.`);

//question no 15

const date = new Date()

let min = date.getMinutes()
let hour = date.getHours()
let year1 =date.getFullYear()
let month = date.getMonth()
let dates = date.getDate()

console.log(`${year1}-${month + 1}-${dates} ${hour}:${min}`);
console.log(`${dates}-${month+1}-${year1} ${hour}:${min}`);
console.log(`${dates}/${month+1}/${year1} ${hour}:${min}`);