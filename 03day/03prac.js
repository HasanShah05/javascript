//LEVEL 1
//question no 1

let firstName = 'Hasan'
let lastName = 'Shah'
let age = 20
let isMarried = false
let country = 'India'
let city = 'Mumbai'
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof country)
console.log(typeof city)

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

let base = prompt('Enter base')
let height = prompt('Enter hright')
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