const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
countries = ['Finland','Sweden','Norway']

//question no 1

const emptySet = new Set()

//question no 2

const numbers = new Set()

for (let i = 0; i <= 10; i++) {
    numbers.add(i)
}
console.log(numbers);

//question no 3

numbers.delete(3)
console.log(numbers);

//question no 4

numbers.clear()
console.log(numbers);

//question no 5

const languages = [
    'English',
    'French',
    'German',
    'French',
    'German',
    'English',
    'English',
    'Hindi',
    'Gujarati'
]

const langSet = new Set(languages)
console.log(langSet);

//question no 6

const map = new Map()

for (const country of countries) {
    map.set(country, country.length)   
}
console.log(map);
