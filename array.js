const newArray = [3,6,4,5,1,8,2,7];

const arraySorted = newArray.sort(function(a,b) {
  return a - b;
});
console.log(arraySorted);

const arraySpliced = newArray.splice(1, 3);
console.log(newArray);