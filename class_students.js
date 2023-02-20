let currentYear = 2023

class Student {

  age = 0
  attending = new Array(25)
  resultGrades = 0
  resultAttends = 0

  constructor(options) {
    this.name = options.name
    this.surname = options.surname
    this.yearOfBirth = options.yearOfBirth
    this.grades = options.grades
  }
  calcAge(currentYear) {
     this.age = currentYear - this.yearOfBirth
  }

  isPresent() {
    for (let i = 0; i < this.attending.length; i++) {
      if (this.attending[i] === undefined) {
        this.attending[i] = true;
        break;
      }
    }
  }

  isAbsent() {
    for (let i = 0; i < this.attending.length; i++) {
      if (this.attending[i] === undefined) {
        this.attending[i] = false;
        break;
      }
    }
  }

  averageGrades() {
    for(let i = 0; i < this.grades.length; i++) {
      this.resultGrades += this.grades[i];
  }
   this.resultGrades =  this.resultGrades / this.grades.length;
  }

  averageAttending() {
    this.resultAttends = this.attending.filter((attending) => attending == true).length / this.attending.length;
  }

  summary() {
    if (this.resultGrades >= 90 && this.resultAttends >= 0.9) {
      console.log("Молодець")
    } else if (
      this.resultGrades >= 90 && this.resultAttends < 0.9){
        console.log("Добре, але можна краще ")
    } else if (
      this.resultGrades < 90 && this.resultAttends > 0.9){
        console.log("Добре, але можна краще ")
    } else {
      console.log("Редіска ")
    }
  } 
}


const student1 = new Student({name: "Дмитрик", surname:"Пяточкін", yearOfBirth: 1996,  grades :[100, 100, 100, 89, 89, 99, 99, 100, 97, 84, 90, 100, 48, 95, 99, 100, 100]})

student1.calcAge(currentYear)

console.log(student1)

student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isPresent()
student1.isAbsent()

student1.averageGrades()

student1.averageAttending()

student1.summary()

const student2 = new Student({name: "Джейсон", surname:"Стейтем", yearOfBirth: 1967,  grades:[99, 100, 75, 89, 89, 2, 99, 100, 97, 84, 90, 100, 48, 95, 99, 100, 100]})
student2.calcAge(currentYear)
console.log(student2)

student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isAbsent()
student2.isAbsent()
student2.isPresent()
student2.isAbsent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isAbsent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isAbsent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isPresent()
student2.isAbsent()

student2.averageGrades()

student2.averageAttending()

student2.summary()

const student3 = new Student({name: "Рейчел", surname:"Грін", yearOfBirth: 1987, grades:[99, 100, 75, 89, 89, 2, 99, 100, 97, 84, 90, 100, 48, 95, 99, 100, 100] })
student3.calcAge(currentYear)
console.log(student3)

student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isPresent()
student3.isAbsent()

student3.averageGrades()

student3.averageAttending()

student3.summary()