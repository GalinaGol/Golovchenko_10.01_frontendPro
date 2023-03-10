
const myDaily = new Promise(function(resolve) {
  setTimeout(() => resolve("woke up, "), 3000)
})
.then((result) => {
  return result + " brush teeth,"
})
.then((result) => {
  return result + " cook breakfast,"
})
.then((result) => {
  return result + " going to work,"
})
.then((result) => {
  return result + " hate people"
})


myDaily.then((result) => console.log(result));


