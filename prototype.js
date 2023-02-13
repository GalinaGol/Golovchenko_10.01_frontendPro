const Car = function(brand){
  this.brand = brand
  this.moving = "the car is moving"
}


Car.prototype.stopping = function () {
  this.stopping = "the car can also stop"
}

const Supercar = function(options) {
  Car.apply(this, arguments)
  this.doorType = options.doorType
}

Supercar.prototype = Object.create(Car.prototype)

const lamborgini = new Supercar ({brand:"Lamborgini", doorType: "open up"})
console.log(lamborgini)
console.log(lamborgini.stopping)


const audi = new Supercar ({brand:"Audi", doorType: "open to the side"})
console.log(audi)
