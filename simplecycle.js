// 1.Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = '';
for(let i = 10; i <= 20; i++){
  result += `${i}, `
}
console.log(result)

// 2.Вивести квадрати чисел від 10 до 20. 

// let result = '';
// for(let i = 10; i <= 20; i++){
//   result += `${Math.pow(i, 2)} `;
// }
// console.log(result)

// 3.Вивести таблицю множення на 7.

// let result = '';
// for(let i = 1; i <= 10; i++){
//   result += `${i} x 7 = ${i*7} `;
// }
// console.log(result)


// 4.Знайти суму всіх цілих чисел від 1 до 15.

// let sum = 0
// for (let i = 1; i <= 15; i++) {
// 	sum += i;
// }
// console.log(sum);


// 5.Знайти добуток усіх цілих чисел від 15 до 35. 

// let result = 1;
// for(let i = 15; i <= 35; i++){
//   result *= i;
// }
// console.log(result)

// 6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

// let sum = 0
// for (let i = 1; i <= 500; i++) {
// 	sum += i/500;
// }
// console.log(sum);

// 7.Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sum = 0
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// };
// console.log(sum);

// 8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

// let result = "";
// for (let i = 100; i < 200; i++) {
//   if (i % 3 === 0) {
//     result += `${i} `;
//   }
// }
// console.log(result);

// 9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

// let n = 20
// let result = "";
// for (let i = 0; i <= n; i++) { 
//     if (n % i === 0) {
//       result += `${i} `;
//     }
//   }
// console.log(result);

// 10.Визначити кількість його парних дільників.

// let n = 40
// let result = "";
// for (let i = 0; i <= n; i++) { 
//     if (n % i === 0 && i % 2 === 0) {
//       result += `${i} `;
//     }
//   }
// console.log(result);

// кількість дільників

// let n = 40;
// let result = 0;
// for (let i = 1; i <= n; i++) { 
//     if (n % i === 0 && i % 2 === 0) {
//       result ++;
//     }
//   }
// console.log(result);

// 11.Знайти суму його парних дільників.

// let n = 40;
// let result = "";
// let sum = 0
// for (let i = 0; i <= n; i++) { 
//     if (n % i === 0 && i % 2 === 0) {
//       sum += i;
//     }
//   }
// console.log(sum);

// 12.Надрукувати повну таблицю множення від 1 до 10.

// for (let i = 1; i <=10; i++){
//   for(let j = 1; j<=10; j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }
