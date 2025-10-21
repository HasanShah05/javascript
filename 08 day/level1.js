//QUESTION NO 1

const dog = {};

//QUESTION NO 2

console.log(dog);

//QUESTION NO 3

 dog.name = 'husky'
 dog.legs = 4
 dog.color = 'brown'
 dog.age = 5
 dog.bark = function () {
    return'woof woof'
    
 }

 //QUESTION NO 4
 console.log(dog.name);
 console.log(dog.legs);
 console.log(dog.color);
 console.log(dog.age);
 console.log(dog.bark());
 
 //QUESTION NO 5

 dog.breed = 'siberian husky'

 dog.getDogInfo = function () {
    let statement = `name: ${this.name} legs: ${this.legs} color: ${this.color} age: ${this.age} breed: ${this.breed}`
    return statement
    
 }

console.log(dog.getDogInfo());

 