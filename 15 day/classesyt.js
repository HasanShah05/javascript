
class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.passoword = password
    }
    encryotPassword(){
        return `${this.passoword}abc`
    }
    usernameUpper(){
         return `${this.username.toUpperCase()}`
    }
    static showDateTime(){
        let now = new Date()
        let date = now.getDate()
        let month = now.getMonth() + 1
        let year = now.getFullYear()
        let hour = now.getHours()
        let min = now.getMinutes()
        if (hour < 10) {
            hour = '0' + hour
        }
        if (min < 10) {
            min = '0' + min
        }
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hour + ':' + min
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

const chai = new user('Chai','chai@gmail.com','123')
console.log(chai.encryotPassword());
console.log(chai.usernameUpper());

class user1{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class teacher extends user1{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`This course was added by ${this.username}`);
    }
}

const tea = new teacher('Tea','Tea@gmailcom','123')
tea.addCourse()

const masalaChai = new user1('masalaChai','chai@gmail.com','123')
masalaChai.logMe()
console.log(typeof tea);

console.log(user.showDateTime());

