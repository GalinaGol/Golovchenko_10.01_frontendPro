
// Створіть масив елементів (Наприклад: ["apple", "carrot", "pear", "celery"]).

const fruitArr = ["apple", "carrot", "pear", "celery"];

// Виведіть послідовно кожен елемент масиву з допомогою forEach().

  fruitArr.forEach(item =>{
    console.log(item);
  });

// Виведіть послідовно кожен елемент масиву з допомогою for ... of.

for (const fruit of fruitArr) {
  console.log(fruit);
}