const callback = (n) => {
    return n**2
}

function cube(callback,n) {
    return callback(n) * n
}
// console.log(cube(callback,3));

const highOrder = n => {
    const doSomething = m => {
    const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}
// console.log(highOrder(2)(3)(10));


//HIGH ORDER FUNCTION SELF UNDERSTANDING 
function add(a,b, cb) {
    let result = a + b
    cb(result)
}

function showResult(result) {
    // console.log(result);
    
}

add(5,3,showResult)

const map = new Map()

map.set('IN',"India")
map.set('FR',"France")
map.set('USA',"United States Of America")

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'Game 1': 'Valorant',
    'Game 2': 'GTAV'
}

for (const key in myObject) {
    // console.log(`this ia ${key} :- ${myObject[key]}`);
    
}

const programming = ["js", 'rb', 'py', 'java', 'rb', 'cpp']

for (const key in programming) {
//   console.log(programming[key]);
    
}

const coding = ['java','javascript','python','ruby','cpp']

coding.forEach(  (item, index, arr) => {
    // console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'js'
    },
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageName: 'py'
    }
]

myCoding.forEach(  (item) => {
    console.log(item.languageName);
    
} )