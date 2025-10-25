//QUESTION NO 1

let challange = '30 Days Of Javascript'

//QUESTION NO 2

console.log(challange)

//QUESTION NO 3

console.log(challange.length)

//QUESTION NO 4

console.log(challange.toUpperCase())

//QUESTION NO 5

console.log(challange.toLowerCase())

//QUESTION NO 6

console.log(challange.substring(3))

//QUESTION NO 7

console.log(challange.substring(0, 3))

//QUESTION NO 8

console.log(challange.includes('script'))

//QUESTION NO 9

console.log(challange.split())

//QUESTION NO 10

console.log(challange.split(''))

//QUESTION NO 11

let company = 'Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(company.split(','));

//QUESTION NO 12

console.log(challange.replace('Javascript', 'python'))

//QUESTION NO 13

console.log(challange.charAt(15))

//QUESTION NO 14

console.log(challange.charCodeAt('j'))

//QUESTION NO 15

console.log(challange.indexOf('a'))

//QUESTION NO 16

console.log(challange.lastIndexOf('a'))

//QUESTION NO 17

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//QUESTION NO 18

console.log(sentence.lastIndexOf('because'))

//QUESTION NO 19

console.log(sentence.search('because'))

//QUESTION NO 20

console.log(challange.trim())

//QUESTION NO 21

console.log(challange.startsWith('30'))

//QUESTION NO 22

console.log(challange.endsWith('script'))

//QUESTION NO 23

console.log(challange.match(/a/g))

//QUESTION NO 24

let string1 = '30 days of '
let string2 = 'javascript'
let mergeString = string1.concat(string2)
console.log(mergeString);

//QUESTION NO 25

console.log(challange.repeat(2))

//LEVEL 2

//QUESTION NO 1

let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement)

//QUESTION NO 2

let mother_terreca = (`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
console.log(mother_terreca)

//QUESTION NO 3

let strNum = '10';
let num1 = 10;
let converted = parseInt(strNum); 
console.log(typeof converted); 
console.log(converted === num1);

//QUESTION NO 4

let num = parseFloat(9.81)
console.log(Math.ceil(9.81))

//QUESTION NO 5

let word2 = 'python'
let word = 'jagron'
console.log(word.includes('on'))
console.log(word2.includes('on'));


//QUESTION NO 6

let sentence2 = 'I hope this course is not full of jargon'
console.log(sentence2.includes('jargon'))

//QUESTION NO 7

let randomNum100 = Math.floor(Math.random() * 101)
console.log(randomNum100);
 
//QUESTION NO 8

let randomNumber50to100 = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(randomNumber50to100);


//QUESTION NO 9

let randomNumber0to255 = Math.floor(Math.random() * 256)
console.log(randomNumber0to255);

//QUESTION NO 10

let string = 'javascript'
let stringAccess = Math.floor(Math.random() * string.length)
let charAt = string[stringAccess]
console.log(`Character at index ${stringAccess} is '${charAt}'`);


//QUESTION NO 11

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

//QUESTION NO  12

let sentence1 = 'You cannot end a sentence with because because because is a conjunction' 
let modSentence1 = sentence1.substr(31,23)
console.log(modSentence1);

//LEVEL 3

//QUESTION NO 1

let phrase = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let matches = (phrase.match(/love/gi))
console.log(`The word love is repeated ${matches.length} times.`)

//QUESTION NO 2

let phrase2 = 'You cannot end a sentence with because because because is a conjunction'
let match = phrase2.match(/because/gi)
console.log(match.length);

//QUESTION NO 4

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let numbers = text.match(/\d+/g).map(Number)
console.log(numbers);

let annualsalary = numbers[0] * 12 
let bonus = numbers[1]
let incomeCousre = numbers[2] * 12

let totalAnnualSalary = annualsalary + bonus + incomeCousre
console.log(totalAnnualSalary);
    