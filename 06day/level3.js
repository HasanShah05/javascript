import { countries1 } from "./Arrays.js";
import { webTechs } from "./Arrays.js";
import {countries} from "./Arrays.js";

//QUESTION NO 1

let copyCountries = countries;
console.log(copyCountries);

//QUESTION NO 2

let sortedCountries = [];
sortedCountries = countries.sort()
console.log(sortedCountries);

//QUESTION NO 3


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);

//QUESTION NO 4

let land = [];

for (const country of countries1) {
  if (country.includes('land')) {
    land.push(country)
  }
}
console.log(land);

//QUESTION NO 5

let maxLength = 0;
let longestCountry = '';

for (const country of countries1) {
  if (country.length > maxLength) {
    maxLength = country.length;
    longestCountry = country
  }
}
console.log(longestCountry);

//QUESTION NO 7

let fourcharacters = [];
let size = 4;

for (const country of countries1) {
  if (country.length == size) {
    fourcharacters.push(country)
  }
}
console.log(fourcharacters);

//QUESTION NO 9

let capatalized = []
for (const country of countries1) {
  countries1.reverse()
  country.toUpperCase()
}
console.log(country,countries1);
