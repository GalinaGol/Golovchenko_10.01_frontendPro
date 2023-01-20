
// Задача 1 (основная)

let numOrStr = prompt('input number or string');

switch(numOrStr){
 case null:
  console.log('ви скасували');
  break;
 case " ":
  console.log('Empty String');
  break;
 case !isNaN( numOrStr ) && numOrStr:
  console.log('Ok!');
  break;
 default:
  console.log('number is Ba_NaN');
}

// Задача 2

// const userNumber = Number(prompt('Enter a number between 0 and 3'));

// switch(userNumber){
//     case 0:
//       alert('You select 0');
//       break;
//     case 1:
//       alert('You select 1');
//       break;
//     case 2:
//       alert('You select 2');
//       break;
//     default:
//       alert('Follow the rules');
// }


// Задача 3

// let userName =  prompt("Enter your name and surname!");
// let userConfirm = confirm("You agree to the processing of personal data in accordance with the company's policy?");

// if ( userConfirm == true )
// {
//    alert(`${ userName }, wait for a phone call from our consultant!`);
// }
// else{
//    alert("Sorry. We cannot provide our services without consultation.")
// }

