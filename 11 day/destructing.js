const numbers = [1,2,3]

// let [a,b,c] = numbers

// console.log(a,b,c);

const fullStack = [
    ['Html','CSS','JS','React'],
    ['Node','Express','MangoDB']
]

// const [frontEnd,backEnd] = fullStack
// console.log(frontEnd);
// console.log(backEnd);

const nums = [1,2,3,4,5,6,7,8,9,10]
let [numOne, numTwo, numThree, ...rest] = nums
// console.log(numOne,numTwo,numThree,...rest);
// console.log(rest);

// for (const [first, second, third,four] of fullStack) {
    // console.log(first,second,third,four); }
    


const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let {height: h, width: w, area: a} = rectangle
console.log(w,h,a);

// const perimeterOfRectangle = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
// }

// console.log(perimeterOfRectangle(rectangle));

const calculatePermiter = ({width, height}) => {
    return 2 * (width + height)
}
console.log(calculatePermiter(rectangle));

const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task,time,completed} of todoList) {
    console.log(task,time,completed);
}

const frontEnd = ['Html','CSS','JS','React']
const backEnd = ['Node','Express','MangoDB']
const developer = [...frontEnd, ...backEnd]
console.log(developer);

