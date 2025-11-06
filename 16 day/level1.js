const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


//question no 1

const skillsString = JSON.stringify(skills)
console.log(skillsString);

//question no 2

const ageString = JSON.stringify(age)
console.log(ageString);

//question no 3

const isMarriedString = JSON.stringify(isMarried)
console.log(isMarriedString);

//question no 4

const studentString = JSON.stringify(student)
console.log(studentString);
