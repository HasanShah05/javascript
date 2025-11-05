//question no 1

class Animal {
    constructor(name, age, colour, legs){
        this.name = name
        this.age = age
        this.colour = colour
        this.legs = legs
    }
    getFullInfo(){
        console.log(`${this.name} is a ${this.age} years old animal. it's ${this.colour} in color and has ${this.legs} legs.`);
        
    }
}

const dogesh = new Animal('husky','5','brown','4')
dogesh.getFullInfo()

//question no 2

class dog extends Animal{
    bark(){
        return 'woof woof!'
    }
}

class cat extends Animal{
    pur(){
        return 'meaow meaow'
    }
}

const billie = new cat('mario',3,'white',4)
console.log(billie);
console.log(billie.pur());

