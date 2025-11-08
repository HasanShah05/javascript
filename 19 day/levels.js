function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc());
console.log(innerFunc());

function maths() {
    let a = 20
    let b = 10
    function multiplication() {
        return a * b
    }
    function addition() {
        return a + b
    }
    function subtraction() {
        return a - b
    }
    return {
        multiplication,
        addition,
        subtraction
    }
}
const result = maths()
console.log(result.addition());
console.log(result.multiplication());
console.log(result.subtraction());