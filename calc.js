
const opt = String(prompt ("выберите одну из функций: add, sub, mult, div", "")) ;
const num1 = Number(prompt ("введите первое число", 1));
const num2 = Number(prompt ("введите второе число", 2));


let result = "";

switch (opt) {
    case 'add':
        result = num1 + num2;
        break;
    case 'sub':
        result = num1 - num2;
        break;
    case 'mult':
        result = num1 * num2;
        break;
    case 'div':
        result = num1 / num2;
        break;
    default:
        alert("Действие выполнить невозможно.");
}
alert(`Результат: ${ result }`);