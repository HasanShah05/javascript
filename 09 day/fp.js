const numbers = [1,2,3,4,5]
const countries = ['India', 'France','China', 'italy','Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya',]
const age = [15,20,54,67,22,25]

countries.forEach(  (item, index, arr) => {
    // console.log(item, index, arr);
    
} )

let sum = 0
numbers.forEach(num => {
    sum += num
})
// console.log(sum);

countries.forEach( (Element) => {
    // console.log(Element.toUpperCase());
    
} )

const square = numbers.map((num) => num * num)
// console.log(square);

const countryUpper = countries.map((country) => country.toUpperCase())
// console.log(countryUpper);


const cointainLand = countries.filter((country) => country.includes('land'))
// console.log(cointainLand);

const countriesLength = countries.filter((country) => country.length == 5)
// console.log(countriesLength);

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const greateScore = scores.filter((score) => score.score > 80)
// console.log(greateScore);

const areAllStr = countries.every((country) => typeof country == 'string')
// console.log(areAllStr);

const areAllNo = numbers.every((item) => typeof item === 'number')
// console.log(areAllNo);


//checking difference in filter and find.
//returns whole array after filtering.
const voter = age.filter((ages) => ages > 18)
// console.log(voter);

//returns first value after finding.
const voter2 = age.find((ages) => ages > 18)
// console.log(voter2);

const ages = age.findIndex((age) => age > 43)
// console.log(ages);

//SORT

console.log(countries.sort());
