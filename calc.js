
let opt = String(prompt ("выберите одну из функций: + - * /", "")) ;

const add = "+";
const sub = "-";
const mult ="*";
const div = "/";

let num1 = Number(prompt ("введите первое число", 1));
let num2 = Number(prompt ("введите второе число", 2));

switch (opt) {
    case add:
        result = num1 + num2;
        break;
    case sub:
        result = num1 - num2;
        break;
    case mult:
        result = num1 * num2;
        break;
    case div:
        result = num1 / num2;
        break;
    default:
        alert("Жулик!Считай сам на калькуляторе");
}

alert(`я сделяль: ${ num1 } ${ opt } ${ num2 } = ${ result } `);
