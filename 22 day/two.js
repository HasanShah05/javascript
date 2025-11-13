const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = 'orange'
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
// console.log(dayOne);

// console.log(dayOne.parentElement);

console.log('Nodes: ', parent.childNodes);

let title
for (let i = 0; i > 10; i++) {
    title = document.createElement('h1')
    title.style.fontSize = '20px'
    title.className = 'title'
    title.style.textAlign = 'center'
    title.style.borderRadius = '12px'
    title.style.backgroundColor = 'green'
    title.textContent = i
    document.body.appendChild(title)
}