
console.log(localStorage);


localStorage.setItem('firstName', 'Hasan')
localStorage.setItem('lastName', 'Shah')
localStorage.setItem('age',20)

const skill = ['Html', 'CSS', 'Javascript', 'React', 'MangoDB']
const skillsJson = JSON.stringify(skill)
localStorage.setItem('skills', skillsJson)

const user = {
    firstName: 'Hasan',
    age: 20,
    skills: [
        'Html',
        'CSS',
        'Javascript',
    ]
}
const userJson = JSON.stringify(user)
localStorage.setItem('hasan', userJson)

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills);

let skillsOnj = JSON.parse(skills)
console.log(skillsOnj);
localStorage.clear()

