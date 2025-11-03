console.log('%d %s of JavaScript', 30, 'Days')

console.log('%c30 Days Of JavaScript', 'color:green') 


console.log(
  '%c30 Days%c %cOf%c %cJavaScript',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
)

console.log("%cHasan%c %cShah",
    'color:red',
    '',
    'color:cyan',
);

console.warn('This is day 13th of learning javascript');
console.error(`oh no there's an error`);

const names = ['Hasan','Jack','Jhon','Mick']
console.table(names)

const user = {
    name: 'Hasan',
    isLoggedIn: true,
    skills: [
        'Html',
        'CSS',
        'Javascript',
        'Tailwind CSS'
    ]
}
console.table(user)

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)

const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(users)

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.info('30 days of javascript is trending on github');

console.assert(4>3, '4 is greater than 3')
console.assert(3>4, '3 is not greater than 4')


console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

const counter = () => {
  console.count('the gunction has been called')
}
counter()
counter()
counter()

console.clear()
