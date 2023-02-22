// Создать функцию которая будет принимать миллисекунды и вернет true или false 
// в зависимости от того сегодня ли то число которое было передано


const example1 = 1677095353258

const today = new Date()
console.log(today.getTime())

function isToday(time, today) {
 if (time === today) {
  return true
 } else {
  return false
 }
}

console.log(isToday(today, example1))

// 2.Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

const myBirthday = new Date (1998,6,19,11,15)
// console.log(myBirthday.getTime())

const timestamp  = 900836100000
let date = new Date(timestamp);

function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear()+ ' ' + date.getHours() + ':' + date.getMinutes());

// 3.Создать функцию которая принимает миллисекунды и вернет количество 
// времени которое прошло или должно пройти с текущего момента.

const someDay  = 1677067190473

function calcHours(nowTime, thatTime) {  
  const now = nowTime.getTime(); 
  let result = now - thatTime; 
  let resultHours = Math.floor(result / (1000 * 60 * 60));

  return `с того времени прошло ${resultHours} часов`
}

console.log(calcHours(today,someDay))

