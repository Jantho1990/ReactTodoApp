// function add (a, b) {
//     return a + b
// }

// console.log(add(3, 1))

// let toAdd = [9, 5]
// console.log(add(...toAdd))

// let groupA = ['Josh', 'Matt', 'Armin']
// let groupB = ['Jared']

// let final = [...groupA, 3, ...groupB]
// console.log(final)

let person = ['Ariel', 39]
let person2 = ['Moriel', 44]
// Hi [person], you are [age]
function printNameAge(name, age){
    console.log('Hi, ' + name + ', you are ' + age)
}

printNameAge(...person)
printNameAge(...person2)

let names = ['Hawk', 'Spencer']
let final = ['Josh', ...names]
// Hi [name]
function printNames(names){
    names.map((name) => console.log('Hi', name))
}

printNames(final)