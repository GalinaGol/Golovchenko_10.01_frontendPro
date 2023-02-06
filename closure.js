// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(20) = 28


function sumAccumulator() {
  let acc = 0
  return function (num) {
    acc = acc + num
    return acc;
  }
}

let add = sumAccumulator()

console.log(add(3))
console.log(add(5))
console.log(add(20))