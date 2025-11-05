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
class dog extends Animal{
    constructor(name, age, colour, legs){
        super(name, age, colour, legs)
    }
    bark(){
        return 'woof woof!'
    }
    getFullInfo(){
        console.log(`${this.name} is a ${this.age} years old animal. it's ${this.colour} in color and has ${this.legs} legs. its says ${this.bark()}`);   
    }
}

class cat extends Animal{
    pur(){
        return 'meaow meaow'
    }
}

const husky = new dog('husky',5,'brown',4)
console.log(husky.getFullInfo());

