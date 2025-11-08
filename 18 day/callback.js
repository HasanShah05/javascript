const doSomething = callback => {
    setTimeout(() => {
        const skills = ['Html','CSS','Javascript']
        callback(false,skills)
    },2000)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
}

doSomething(callback)


const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['Html','Css','Javascript']
        if (skills.length < 0) {
            resolve(skills)
        } else {
            reject('something went wrong')
        }
    },2000)
})

doPromise
.then(error => console.log(error))
.catch(result => console.log(result))

const square = async function (n) {
    return n * n
}

async function run() {
    const value = await square(2)
    console.log(value);
}
run();


