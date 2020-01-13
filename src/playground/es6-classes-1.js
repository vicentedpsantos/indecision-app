class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hi, I am ${this.name}`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()

    if(this.hasMajor()) {
      description = `${description} This person studies ${this.major}`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    return !!this.homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if(this.hasHomeLocation()) {
      greeting = `${greeting} and I am from ${this.homeLocation}`
    }

    return greeting
  }
}

const me = new Person('Vicente Santos', 29)
const tamires = new Student('Tamires Quito', 29, 'Pharmacy')
const augusto = new Traveler('Augusto Santos', 15, 'Porto Alegre')

console.log(tamires)
console.log(tamires.hasMajor())
console.log(tamires.getDescription())

console.log(augusto)
console.log(augusto.getGreeting())
