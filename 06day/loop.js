//THIS IS FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     console.log(`2 * ${i} = ${2 * i}`)
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const upper = []
// for(let i = 0; i < countries.length; i++){
//   upper.push(countries[i].toUpperCase())
// }
// console.log(upper)

//THIS IS FOR OF LOOP

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// for (const companies of webTechs) {
//     console.log(companies.toUpperCase());
//     console.log(companies[0]);
    
// }

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const upper = []
 for (const sher of countries) {
        upper.push(sher.toUpperCase())
    }
    console.log(upper);
    
//THIS IS WHILE LOOP

let i=0
while (i <= 10) {
    console.log('hasan')
    i++
}

//THIS IS DO WHILE LOOP

let j = 0
do {
    console.log('shah');
    j++
} while (j <= 10);

//THIS IS BREAK 

for (let i = 1; i <= 10; i++) {
    console.log('lala college');
    if(i == 5){
        break
    }
    
}

//THIS IS CONTINUE

// for (let i = 1; i <= 10; i++) {
//     console.log('impex house');
//     if(i == 10){
//         continue
//     }
// }