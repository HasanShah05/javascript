// const languages = ['Hindi','English','French','Urdu','German']

// const setOfLanguages = new Set(languages)

/**for (const language of setOfLanguages) {
    console.log(language);
} */

//adding element in set

const companies = new Set()
// console.log(companies.size);
companies.add('Apple');
companies.add('Google')
companies.add('Micrisoft')
companies.add('Infosys')
// console.log(companies.size);
// console.log(companies);

//adding more compnies using for of loop

const companies1 = ['Amazon','Oracle']

const setOfCompanies = new Set()
for (const company of companies1) {
    companies.add(company)
}
// console.log(companies);

companies.delete('Infosys')
// console.log(companies);

// console.log(companies.has('Apple'));
companies.clear()
// console.log(companies);

const languages = [
    'English',
    'French',
    'German',
    'French',
    'German',
    'English',
    'English'
]

const langSet = new Set(languages)

const count = []

for (const l of langSet) {
    let filterdLang = languages.filter(lng => lng === l)
    count.push({lang: l, count: filterdLang.length})
    
}
// console.log(count);

//useing to sount unique values in the array such as

const numbers = [20,15,25,25,67,20,15]

const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers);

//UNION SETS

let a = [1,2,3,4,5]
let b = [3,4,5,6,7,8]
// let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
/* let C = new Set(c)
console.log(C); */

//INTERSECTION OF SET

/* let c = a.filter(num => B.has(num))
let C = new Set(c)
console.log(C); */

//DIFFERENCE SETS

let c = a.filter( num => !B.has(num))
let C = new Set(c)
console.log(C);

