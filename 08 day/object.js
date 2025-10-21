
const resctangle = {
    length: 10,
    width: 20
}
console.log(resctangle);


const hasanInfo = {
    firstName:'Hasan',
    lastName: 'shah',
    age: 20,
    country: 'India',
    city: 'Mumbai',
    skils: [
        'Html',
        'javascript',
        'css',
        'tailwind css',
        'excel'
    ],
    isMarried: false,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }

}
console.log(hasanInfo);
console.log(hasanInfo.lastName);
console.log(hasanInfo.age);
console.log(hasanInfo.getFullName());

hasanInfo.nationality = 'Indian'
hasanInfo.skils.push('typing')
console.log(hasanInfo.nationality);
console.log(hasanInfo.skils);

const copyPeron = Object.assign({}, hasanInfo)
console.log(copyPeron);

const keys = Object.keys(copyPeron)
console.log(keys);

const entries = Object.entries(copyPeron)
console.log(entries);

console.log(copyPeron);

console.log(copyPeron.hasOwnProperty('lastName'));

