// 1. Створити сутність "Людина".
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Human {
  constructor(options) {
    this.name = options.name
    this.age = options.age
  }
  showInfoDriver() {
    console.log(`Водія звати ${this.name}, ${this.age} років`)
  }
}

const driver1 = new Human({name: "Міхаель Шумахер", age: 43})
const driver2 = new Human({name: "Ярік воділа", age: 17})
const driver3 = new Human({name: "Домінік Торетто", age: 56})

console.log(driver1)
console.log(driver2)
console.log(driver3)


// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри : марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, 
// та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18,
//  інакше виводити у консоль відповідне повідомлення

// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу 
// інформації класу Людина для виведення інформації про власника



class Car {

  owner = []
  constructor(options){
    this.brand = options.brand
    this.color = options.color
    this.year = options.year
    this.condition = options.condition
  }

  addOwner(driver){
    if(driver.age >= 18) {
      this.owner.push(driver)
    } else{
      console.log("ранувато за кермо")
    }
  }

  showInfoCar(){
    console.log(`Марка:${this.brand}, кольор:${this.color},  рік випуску:${this.year}, стан:${this.condition}`)
  }
}

const car1 = new Car({brand: "Bugatti", color: "red", year: 2014, condition: "new"})
car1.addOwner(driver1)
console.log(car1)

const car2 = new Car({brand: "ВАЗ", color: "белый", year: 1998, condition: "корч"})
car2.addOwner(driver2)
console.log(car2)

const car3 = new Car({brand: "Dodge", color: "black", year: 1970, condition: "used"})
car3.addOwner(driver3)
console.log(car3)

