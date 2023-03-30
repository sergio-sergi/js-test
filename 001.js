const hello = name => {
    console.log('hello -', name)
}

hello('everyone')

//closure:
function createMember(name) {
    return (lastName) => {
        console.log(`${name} ${lastName}`)
    }
}

const logWithLastName = createMember("Foo")
//
// console.log(logWithLastName('Bar'))
// console.log(logWithLastName('Baz'))

let person = {
    name: 'Sergio',
    lastName: 'Sergi',
    age: 43,
    job: "Programmer"
}

// Object.keys(person)
//     .forEach(key => {
//     console.log('key: ', key)
//     console.log('val: ', person[key])
// })

// Context:
const logger = {
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`${key}: ${this[key]}`)
        })
    },
    withParams(top = false, middle = false, bottom = false) {
        if (top)
            console.log('----top----')
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if (middle && index !== array.length - 1)
                console.log('----------')
        })
        if (bottom)
            console.log('----bottom----')
    }
}
//
// logger.keysAndValues.call(person)
// logger.withParams.call(person, true, true, true)

//Promise:
const delay = delay => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
    return promise
}

delay(2000).
then(() => console.log('2 sec elapsed')).
catch(err => console.log(err)).
finally(() => console.log('finally block'))