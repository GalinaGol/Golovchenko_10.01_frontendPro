
// 1.Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. 
// Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'



const usersName = prompt("введіть своє им'я", "Lexa");
const usersTime = prompt("введіть час, через якій вас привітати", "4 seconds")

let [quantity, period] = usersTime.split(' ')

function periodToSeconds(period) {
  switch(period) {
    case 'second':
    case 'seconds':
      return 1;
    case 'minute': 
    case 'minutes': 
      return 60;
    case 'hour': 
    case 'hours': 
      return 3600;   
    default:
      alert('Wrong period - ' + period);   
  }
}

secondTimeValue = periodToSeconds(period)

function sayHi(name) {
  console.log('Привет, ' + usersName);
}

setTimeout(sayHi, secondTimeValue * quantity * 1000);

// 2.Создать функцию которая будет или сериализировать или десериализировать объект 
// в зависимости от того в какой форме он был передан

let json = '{"name":"John", "age": 30}'
let obj = {namе: 'Galina' , age:24}


function checkingType(n) {
    if (typeof n  === "string") {
    const isObject = JSON.parse(n)
    return isObject
    } else {
    const isJson = JSON.stringify(n)
    return isJson 
    }
}

console.log(checkingType(json))

// 3.Создать функцию которая вернет true или false в зависимости 
// от того что в нее передать JSON строку или обычную строку

let jsonstr = '{"name":"John", "age": 30}'
let str = 'Galina'

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

console.log(isJsonString(jsonstr))