// 1 Избавится от неуникальных элементов массива
const numbersArray = [1,1,2,3,4,5,5,5,6];

const deleteDublicates = (array) => {
    return [...new Set(array)]
}

console.log(deleteDublicates(numbersArray))

// 2 Создать Map который будет по переданному объекту возвращать строку привествия
// greetUser(userBob) // Hello Bob nice to see you
// greetUser(userJane) // How your kids doing Jane?

const userBob = {
    name: 'Bob'
}

const userJane = {
    name: 'Jane'
}

const userMap = new Map()

userMap.set(userBob, 'Hello Bob nice to see you')
userMap.set(userJane, 'How your kids doing Jane?')

function greetUser(greetings) {
     return userMap.get(greetings);
}

console.log(greetUser(userBob))
console.log(greetUser(userJane))


// 3 Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.

let obj1 = {
    name: "John",
    age: 30
}

const map = new Map([
    ['animal', 'otter'],
    ['shape', 'triangle'],
    ['city', 'New York'],
    ['country', 'Bulgaria'],
])

function mapTransformation(item) {
    if ( item.size > 0) {
        let newObj = Object.fromEntries(item);
        return newObj
    } else {
        let newMap = new Map(Object.entries(item))
        return newMap
    }
}

console.log(mapTransformation(obj1))

console.log(mapTransformation(map))