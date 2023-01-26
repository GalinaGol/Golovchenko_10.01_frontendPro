
const yearBirth = prompt("Введіть ваш рік народження", "");
const city = prompt("Введіть назву міста, в якому ви живете", "");
const favouriteSport = prompt("Введіть улюбленний вид спорту", "");
let age = null;

let capital = "";
let choosenSport = "";

if (null === yearBirth) {
    alert("Шкода, що Ви не хочете сказати скільки Вам рочків. Я знаю, що багато...");
} else {
    age = 2023 - yearBirth;
}

switch (city) {
    case 'Київ':
        capital = "Ти живеш в столиці України, Слава Україні!";
        break;
    case 'Вашингтон':
        capital= "Ти живеш в столиці CША, де Patriot?";
        break;
    case 'Лондон':
        capital = "London is the capital of GB.";
        break;
    default:
        alert("Шкода, що Ви не захотіли ввести назву міста, в якому ви живете. Це звісно ж не Київ, не Вашингтон та навіть не Лондон");
}

switch (favouriteSport) {
    case 'футбол':
        choosenSport = "як Мессі?";
        break;
    case 'бокс':
        choosenSport= "як брати Кличко?";
        break;
    case 'теніс':
        choosenSport = "як Серена Уільямс?";
        break;
    default:
        alert("Шкода, що Ви не захотіли ввести вид спорту, який вам подобається.");
}

alert(`Дивись, ти вже немолодий, тобі ${ age }. ${ capital } Круто! Хочеш стати ${ choosenSport } `);