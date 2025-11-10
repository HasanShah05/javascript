//Question no 1

let allP = document.querySelectorAll('p')
allP.forEach(function(p){
    p.style.backgroundColor = 'black'
    p.style.color = 'cyan'
    p.style.borderRadius = '15px'
})

//Question no 2

for (let i = 0; i < allP.length; i++) {
    if (i === 0 || i === 2) {
        allP[i].style.color = 'green'
    } else {
        allP[i].style.color = 'red'
    }
}