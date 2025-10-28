const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
countries = ['Finland','Sweden','Norway']

console.log(a);
console.log(b);


//question no 1

let A = new Set(a)
let B = new Set(b)

let c = [...A, ...b]

let C = new Set(c)
console.log(C);

//question no 2

let d = a.filter( num => B.has(num) )
let D = new Set(d)
console.log(D);

//question no 3

let e = a.filter( num => !B.has(num) )
let E = new Set(e)
console.log(E);

let f = b.filter( num => !A.has(num) )
let F = new Set(f)
console.log(F);
