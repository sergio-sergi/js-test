const hello = name => {
    console.log('hello -', name)
}

hello('everyone')

function createMember(name){
    return (lastName) => {
        console.log(`${name} ${lastName}`)
    }
}

const logWithLastName = createMember("Foo")

console.log(logWithLastName('Bar'))
console.log(logWithLastName('Baz'))
