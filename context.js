const person = {
    name:'',
    age:0,
    logInfo(){
        console.group(`${this.name}`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.groupEnd()
    }
}

const lena = Object.create(person)
lena.name = 'Elena'
lena.age = 22

person.logInfo.bind(lena)()