const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  return array.filter(el => el !== item);
  }
console.log(removeElement(array,5));


removeElement1(array, 7);
console.log(array);

function removeElement1(array, value) {
  let index = array.indexOf(value);
  array.splice(index, 1);
}


