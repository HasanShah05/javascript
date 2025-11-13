function outerFunction() {
    let count = 0
    function innerFunction() {
        count ++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc());


let name = prompt('Enter your name:')
if (name == 'hasan') {
    console.log('welcome:', name);
} else {
    console.log(error);
}