const eightEmptyValues = Array(8).fill('x')
console.log(eightEmptyValues)

const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const weblang = ['html','css','javascript','excel','python']
console.log(weblang.length)

console.log(weblang.indexOf('javascript'))

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

console.log(fruits.lastIndexOf('orange'))
console.log(fruits.includes('orange'))

let js ='javascript'

console.log(Array.isArray(fruits))
console.log(Array.isArray(js))

console.log(weblang.toString())

console.log(weblang)
console.log(weblang.join(''))
console.log(weblang.join(' '))
console.log(weblang.join(' * '))

  const numbers = [1,2,3,4,5]

  console.log(numbers.slice())
  console.log(numbers.slice(0)) 
  console.log(numbers.slice(0, numbers.length)) 
  console.log(numbers.slice(0,4)) 
  console.log(numbers.slice(0,3))

weblang.push('redhat')
console.log(weblang)
weblang.pop()
console.log(weblang)

weblang.shift()
console.log(weblang)

weblang.unshift('hasan')
console.log(weblang)

weblang.reverse()
console.log(weblang)

weblang.sort()
console.log(weblang)

const frntEnd = ['HTML','CSS','JAVASCRIPT','TAILWIND CSS']
const backEnd = ['NODE','EXPRESS','MANGODB']
const fullStack = [frntEnd,backEnd]
console.log(fullStack)