const titles = document.getElementsByTagName('h1')
console.log(titles.length);
console.log(titles);

for (let i = 0; i < titles.length; i++) {
    console.log(titles[i]);
}

console.log(titles);

const tempList = document.getElementsByClassName('list-item')
console.log(tempList);

tempList[3].textContent = 'Fourth title'