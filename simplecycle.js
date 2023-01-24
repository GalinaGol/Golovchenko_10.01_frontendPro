
// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result1 = '';
for(let i = 10; i <= 20; i++){
  result1 += `${i}, `
}
console.log(result1)

// 2.Вивести квадрати чисел від 10 до 20. 

let result2 = '';
for(let i = 10; i <= 20; i++){
  result2 += `${Math.pow(i, 2)} `;
}
console.log(result2)

// 3.Вивести таблицю множення на 7.

let result3 = '';
for(let i = 1; i <= 10; i++){
  result3 += `${i} x 7 = ${i*7} `;
}
console.log(result3)


// 4.Знайти суму всіх цілих чисел від 1 до 15.

let sum4 = 0
for (let i = 1; i <= 15; i++) {
	sum4 += i;
}
console.log(sum4);


// 5.Знайти добуток усіх цілих чисел від 15 до 35. 

let result5 = 1;
for(let i = 15; i <= 35; i++){
  result5 *= i;
}
console.log(result5)

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum6 = 0
for (let i = 1; i <= 500; i++) {
	sum6 += i/500;
}
console.log(sum6);

// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum7 = 0
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum7 += i;
  }
};
console.log(sum7);

// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let result8 = "";
for (let i = 100; i < 200; i++) {
  if (i % 3 === 0) {
    result8 += `${i} `;
  }
}
console.log(result8);

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let numFor9 = 20
let result9 = "";
for (let i = 0; i <= numFor9; i++) { 
    if (numFor9 % i === 0) {
      result9 += `${i} `;
    }
  }
console.log(result9);

// 10.Визначити кількість його парних дільників.

let numFor10 = 40;
let result10 = 0;
for (let i = 1; i <= numFor10; i++) { 
    if (numFor10 % i === 0 && i % 2 === 0) {
      result10 ++;
    }
  }
console.log(result10);

// 11.Знайти суму його парних дільників.

let numFor11 = 40;
let sum11 = 0
for (let i = 0; i <= numFor11; i++) { 
    if (numFor11 % i === 0 && i % 2 === 0) {
      sum11 += i;
    }
  }
console.log(sum11);

// 12.Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <=10; i++){
  for(let j = 1; j<=10; j++){
    console.log(`${i} x ${j} = ${i*j}`)
  }
}