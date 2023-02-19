// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Human {
  constructor(options) {
    this.name = options.name
    this.gender = options.gender
  }
}

const human1 = new Human({name: "Jorik", gender: "male"})
const human2 = new Human({name: "Lariska", gender: "female"})
const human3 = new Human({name: "San Sanych", gender: "male"})

console.log(human1)
console.log(human2)
console.log(human3)


// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Apartment {
  habitants = []

  addHabitants(humans) {
    this.habitants.push(humans)
  }
}

const apart1 = new Apartment()
apart1.addHabitants(human1)
apart1.addHabitants(human2)

console.log(apart1)

const apart2 = new Apartment()
apart2.addHabitants(human3)

console.log(apart2)

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, 
// чи не буде кількість перевищувати максимальну кількість квартир, 
// і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
  apartments = []

  constructor(options) {
    this.maxSpace = options.maxSpace
  }

  addAparts(quantity, aparts){
    if (quantity < this.maxSpace) {
      this.apartments.push (aparts)
    } else console.log ("места нет")
  }
}

const house = new House ({maxSpace:3})
house.addAparts(1, apart1)
house.addAparts(1, apart2)

console.log(house)