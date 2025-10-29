countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

const map = new Map(countries)
console.log(map);

const countiresMap = new Map()
countiresMap.set('India','Delhi')
countiresMap.set('Japan','Tokyo')
console.log(countiresMap);
console.log(countiresMap.size );

console.log(countiresMap.get('Japan'));
console.log(countiresMap.has('India'));

for (const item of countiresMap) {
  console.log(item);
}

for (const [country , capital] of countiresMap) {
  console.log(country , capital);
}
