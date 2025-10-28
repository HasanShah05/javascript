//QUESTION NO 1

function solveLinEquation(a,b,c,x,y) {
    return a * x + b * y + c;
}
console.log(solveLinEquation(1,2,3,4,5));

//QUESTION NO 3

function printArray(arr) {
  for (const value of arr) {
    console.log(value);
  }

}
const names = ['hasan','john','mick']
printArray(names)

//QUESTION NO 4

function showDateTime() {
    let d = new Date()

    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let min = d.getMinutes()
    let hour = d.getHours()

    date = date < 10 
    ? '0' + date.toString() 
    : date

    month = month < 10 
    ? '0' + month.toString() 
    : month

    min = min < 10
    ? '0' + min.toString()
    : min

    hour = hour < 10
    ? '0' + hour.toString()
    : hour
    
    console.log(`${date}/${month}/${year} ${hour}:${min}`);
}
showDateTime()

//QUESTION NO 5

function swapValues(a ,b) {
  return [b , a]
}
let x = 10;
let y = 40; 
console.log(swapValues(x, y));

//QUESTION NO 6

function reversedArray(arr) {
  let reversed = []
  for (let i = arr.length -1 ; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}

console.log(reversedArray(names));

//QUESTION NO 7

function capaitalizedArray(arr) {
  let capital = []
  for (const item of arr) {
    capital.push(item.toUpperCase())
  }
  return capital
}
console.log(capaitalizedArray(names));

//QUESTION NO 8

let company = []

function addItem(item) {
  company.push(item)
  return company
}
console.log(addItem('Apple'));
console.log(addItem('Lenovo'));

//QUESTION NO 9

function removeItem(index) {
  company.splice(index,1)
  return company
}
console.log(removeItem(0));

//QUESTION NO 10

let sum = 0 

function sumOfNumbers(n) {
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}
console.log(sumOfNumbers(5));
