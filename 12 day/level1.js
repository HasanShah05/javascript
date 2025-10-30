//question no 1

const sentence = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

let numbers = sentence.match(/\d+/g).map(Number)
let annualSalary = numbers[0] * 12
let annualBonus = numbers[1]
let courseIcome = numbers[2] * 12

let totalIncome = annualSalary + annualBonus + courseIcome
console.log(totalIncome);

//question no 2

let sentence1 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'

let points = sentence1.match(/-?\d+/g).map(Number)
console.log(points);
let sortedPoints = points.sort( (a,b) => a - b )
console.log(sortedPoints);
let distance = sortedPoints[sortedPoints.length -1] - sortedPoints[0]
console.log(distance);

//question no 3

let is_valid_variable = (value) => {
    let validation = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(value.match(validation))
}

console.log(is_valid_variable('first_name'))  //True
console.log(is_valid_variable('first-name'))  //False
console.log(is_valid_variable('1first_name'))  //False
console.log(is_valid_variable('firstname'))  //True