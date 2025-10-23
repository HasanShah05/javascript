//LEVEL 2
//question no 1

import {countries} from './countries.js'
import { webTechs } from './web_techs.js'
console.log(countries)
console.log(webTechs)

//question no 2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(' '))
let words = text.split(' ')
console.log(words.length)

//question no 3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
shoppingCart.pop()
shoppingCart.push('suagr')
shoppingCart[3] = 'green tea'
console.log(shoppingCart)

//question no 4

if(countries.includes('Ethiopia')){
  console.log('Ethiopia')
}
else{
  countries.push('Ethiopia')
  console.log(countries)
}

//question no 5
