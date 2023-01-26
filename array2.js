
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.


const filteredArray1 = arr.filter(item => item > 0 );
console.log(filteredArray1);

const reducedArray = filteredArray1.reduce ((total, current) => total + current);
console.log(reducedArray)

// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.

const maxNumber = (a, b) => {
  return a > b ? a : b;
},
  minNumber = (a, b) => {
      return a < b ? a : b
  };

console.log(arr.reduce(maxNumber), (arr.indexOf(76)+1));
console.log(arr.reduce(minNumber), (arr.indexOf(-63)+1));

// Визначити кількість негативних елементів.

const filteredArrayNeg = arr.filter(item => item < 0 );
console.log(filteredArrayNeg);

// Знайти кількість непарних позитивних елементів.

const filtArrayPos1 = arr.filter(item => item > 0 && item % 2 === 1);
console.log(filtArrayPos1);
// Знайти суму непарних позитивних елементів.

const sumArrayPos1 = filtArrayPos1.reduce ((total, current) => total + current);
console.log(sumArrayPos1)

// Знайти кількість парних позитивних елементів.

const filtArrayPos2 = arr.filter(item => item > 0 && item % 2 === 0);
console.log(filtArrayPos2);

// Знайти суму парних позитивних елементів.

const sumArrayPos2 = filtArrayPos2.reduce ((total, current) => total + current);
console.log(sumArrayPos2)

// Знайти добуток позитивних елементів.

const multArray = filteredArray1.reduce ((total, current) => total * current);
console.log(multArray)

// Знайти найбільший серед елементів масиву, остальні обнулити.

maxEl = (arr.reduce(maxNumber));

const newArr = arr.map((el) => {
  if(el < maxEl){
    return 0
  }
  else{
    return maxEl
  }
})
console.log(newArr)