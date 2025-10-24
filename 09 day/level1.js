const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//QUESTION NO 1

//FOR EACH
// it itrates over each elemnt of an array and executes provided callback function for each element

//MAP
// 

//FILTER
//it filters the array and gives a new array which is formed when the condition is matched.

//REDUCE


//QUESTION NO 3

countries.forEach((country) => console.log(country));

//QUESTION NO 4

names.forEach((name) => console.log(name))

//QUESTION NO 5

numbers.forEach((no) => console.log(no))

//QUESTION NO 6

const countryUpper = countries.map((country) => country.toUpperCase())
console.log(countryUpper);

//QUESTION NO 7

const countryLength = countries.map((country) => country.length)
console.log(countryLength);

//QUESTION NO 8

const noSquare = numbers.map((no) => no * no)
console.log(noSquare);

//QUESTION NO 9

const nameUpper = names.map((name) => name.toUpperCase())
console.log(nameUpper);

//QUESTION NO 10

const price = products.map((prices) => prices.price)
console.log(price);

//QUESTION NO 11

const cointainLand = countries.filter((country) => country.includes('land'))
console.log(cointainLand);

//QUESTION NO 12

const sixChar = countries.filter((country) => country.length == 6)
console.log(sixChar);

//QUESTION NO 13

const sixMoreChar = countries.filter((country) => country.length >= 6)
console.log(sixMoreChar);

//QUESTION NO 14

const hasEChar = countries.filter((country => country.includes('e')))
console.log(hasEChar);

//QUESTION NO 15

const prices = products.filter((p) => typeof p.price == 'number')
console.log(prices);

//QUESTION NO 16

function getStringList(arr) {
    const getItems = arr.filter(value => typeof value === 'string')
    return getItems
}

const mixArray = ['hasan',20,'shah',100]
console.log(getStringList(mixArray));

//QUESTION NO 17

//QUESTION NO 18

//QUESTION NO 19

//QUESTION NO 20

//QUESTION NO 21

//QUESTION NO 22

//QUESTION NO 23

const sixLetter = countries.find(country => country.length == 6)
console.log(sixLetter);

//QUESTION NO 24

const sixLetter2 = countries.findIndex(country => country.length == 6)
console.log(sixLetter2);

//QUESTION NO 25

const findNor = countries.findIndex(country => country == 'Norway')
console.log(findNor);

//QUESTION NO 26

const findRuss = countries.findIndex(country => country == 'Russia')
console.log(findRuss);
