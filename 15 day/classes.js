class Person {
    constructor(firstName, lastName, age, country, city) {
        console.log(this);
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person = new Person('Hasan', ' Shah','20','India','mumbai')
console.log(person);

//creating many objects usinng single class

const person1 = new Person('Jhon', 'killer')
const person2 = new Person('Thomas','Edison')
console.log(person1);
console.log(person2); 

class human {
    constructor(
        firstName = 'Hasan',
        lastName = 'Shah',
        age = 20,
        country = 'India',
        city = 'Mumbai'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const human1 = new human()
const human2 = new human('yetyah','asabeneh',30,'Finland','Helsinki')
console.log(human1);
console.log(human2);

class persons {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    set setScore(score){
        return this.score += score
    }
    set setSkills(skill){
        return this.skills.push(skill)
    }
}

const persons1 = new persons('Hasan','Shah',20,'India','Mumbai')
persons1.setScore = 50
persons1.setSkills = 'Html'
persons1.setSkills = 'Javascript'
persons1.setSkills = 'Css'
console.log(persons1);

