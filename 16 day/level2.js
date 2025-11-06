const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

//question no 1

const person = JSON.stringify(student, ['firstName','lastName','skills'])
console.log(person);
