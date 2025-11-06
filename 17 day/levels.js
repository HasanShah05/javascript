localStorage.setItem('firstName','Hasan')
localStorage.setItem('lastNaeme','Shah')
localStorage.setItem('age',20)
localStorage.setItem('country','India')
localStorage.setItem('city','Mumbai')


const student = {
    firstName:'Hasan',
    lastName:'Shah',
    age:20,
    skills:[
        'Html',
        'CSS',
        'Javascript',
        'Excel',
        'React'
    ],
    country:'India'
}

const studentJson = JSON.stringify(student)
localStorage.setItem('student',studentJson)
console.log(JSON.parse(localStorage.getItem('student')));
