const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//QUESTION NO 1

let personWithSkills = ''
let maxSkills = 0

for (let userName in users ) {
    let existingSkills = users[userName].skills.length
    if (existingSkills > maxSkills) {
        maxSkills = existingSkills
        personWithSkills = userName
    }
    
}
console.log(personWithSkills);

//QUESTION NO 2

let userPoints = ''
let loggedInUser = ''

for (const userName in users) {
    const user = users[userName]
    if (user.isLoggedIn == true) {
        loggedInUser++
    }   
    if (user.points >= 50) {
        userPoints++
        
    }
}
console.log(`number of users logged in:${loggedInUser}`);

console.log(`number of users having points euqal or greater than 50: ${userPoints}`);

//QUESTION NO 3

let mernSrackDevelopers = []

for (const userName in users) {
    const skills = users[userName].skills
    if (skills.includes('MongoDB') && skills.includes('Node') && skills.includes('Express') && skills.includes('React')) {
        mernSrackDevelopers.push(userName)
    }
}

console.log(mernSrackDevelopers);
