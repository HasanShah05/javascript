const countries = [
    {
        name: 'Inida',
        capital: 'Delhi',
        population: 140.05,
        languages: [
            'Hindi',
            'Marathi',
            'English'
        ]
    },
    {
        name: 'Canada',
        capital: 'Ottawa',
        population: 4.13,
        languages: [
            'English',
            'French'
        ]
    },
    {
        name: 'japan',
        capital: 'Tokyo',
        population: 12.4,
        languages: [
            'Amami',
            'Kyukyu',
            'Kikai',
            'Miyako'
        ]
    }
]

//question no 1

// for (const {name, capital, population, languages} of countries) 
//   {  console.log('Country: ' + name);
//     console.log('Capital: ' + capital);
//     console.log('Population: ' + population);
//     console.log('Languages: ' + languages);
// }

//question no 2

// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name, skills, [, , jsScore, reaactScore]] = student
// console.log(name, skills, jsScore, reaactScore);

//question no 3

    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

function convertArrayTOObject(students) {
    const convertedArray = []
    for (const [name,skills,score] of students) {
        convertedArray.push({name, skills, score})
    }
    return convertedArray
}

// console.log(convertArrayTOObject(students));

//question no 4

    const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...student.skills.dataScience, 'SQL']
  }
}

console.log(newStudent);

