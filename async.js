// 1.Реализовать функцию-генератор которая отдаст 10 рандомных чисел в диапазоне переданном в аргументах в ней.

function* generateRandomNum(min, max) {
  for(let value = 0; value < 10; value++) {
    yield Math.floor(Math.random() * (max - min)) + min;
  }
}

let generator = generateRandomNum(20,70);

for(let value of generator) {
  console.log(value); 
}

// 2. Создать свой распорядок дня с помощью async await ( тоесть мы должны "подождать" 
// выполнение асинхронной функции brushTeeth перед тем как приступать к выполнению следующей асинхронной функции)

const myMorning = new Promise((resolve) => {
  setTimeout(() => {
    resolve('woke up,brush teeth, cook breakfast')}, 2000)
})

const myWorkDay = new Promise((resolve) => {
  setTimeout(() => {
    resolve('go to work, have a dinner, work')}, 3000)
})

const myEvening = new Promise((resolve) => {
  setTimeout(() => {
    resolve('cook supper, do my homework')}, 4000)
})

const showMyDay = async () => {
  const result1 = await myMorning
  console.log(result1)
  const result2 = await myWorkDay
  console.log(result2)
  const result3 = await myEvening
  console.log(result3)
}

showMyDay()
