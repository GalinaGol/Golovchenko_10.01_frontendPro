
//1. Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const firstArray = [1, "a", 54, "asd", 4, "why", 65];

function findNumber (item){

  let onlyNum = firstArray.filter(item => typeof item === "number")
  return onlyNum
}
findNumber(firstArray)

const numbers = findNumber()

function findAverange (num){
  return num.reduce((a, b) => (a + b)) / num.length;
}

console.log(findAverange(numbers))

// 2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

const x = Number(prompt('Введіть перше число', 1));
const y = Number(prompt('Введіть друге число', 2));
const znak = String(prompt('Оберіть дію:+, -, *, /, %, ^', '+'));

function doMath(x, znak, y){

  switch (znak) {
      case '+':
          return x + y;
      case '-':
          return x - y;
      case '*':
          return x * y;
      case "/":
          if (num2 !== 0) {
            return num1 / num2;
          } else {
            return "не делится на нуль";
          }
      case '%':
          return x % y;
      case '^':
          return Math.pow(x, y);
      default:
          alert("Действие выполнить невозможно.");
  }
}
console.log(doMath(x, znak, y));

// 3.Написати функцію заповнення даними користувача двомірного масиву. 
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// Значення всіх елементів всіх масивів задає користувач.

const firstLenght = Number(prompt('Введіть довжину основного массиву', 3));
const secondLenght = Number(prompt('Введіть довжину вкладеного массиву', 3));

function createMatrix(firstLenght, secondLenght) {
  const mainArray  = [];
  for (let i = 0; i < firstLenght; i++ ) {
    const secArray = [];
    for (let j = 0; j < secondLenght; j++) {
      secArray.push(j)
    }
    mainArray.push(secArray);
  }
  return mainArray
}

console.log(createMatrix(firstLenght ,secondLenght));


//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

const usersText = "How are you?"
let text = '';

function textCleaner(text, symbolsToRemove) {
  for (let i = 0; i < symbolsToRemove.length; i++) {
     text = text.replace(symbolsToRemove[i], '');
  }
  
  return text;
}

console.log(textCleaner(usersText, ['a']))

