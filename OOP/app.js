// Classes and Instances
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`hello my name is ${this.name}.`);
  }
}

const eda = new Person("eda", 22);
eda.greet();

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  describes() {
    console.log(`"${this.title}" by ${this.author}, ${this.pages} pages`);
  }
}

const newBook = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178);
newBook.describes();
//---------------------------
//Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("rex");
dog.speak();

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  describe() {
    console.log(`${this.brand}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand);
    this.model = model;
    this.year = year;
  }
  describe() {
    console.log(`${this.brand} ${this.model} ${this.year}`);
  }
}

const car = new Car("Toyota", "Corolla", 2022);
car.describe();

//---------------------------
//Encapsulation

class bankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new bankAccount();
account.deposit(1000);
account.withdraw(100);
const newBalance = account.getBalance();
console.log(newBalance);

class User {
  #password = 0;

  setPassword(pass) {
    this.#password = pass;
  }
  checkPassword(pass) {
    return this.#password === pass;
  }
}

const user = new User();
user.setPassword("eda");
const value = user.checkPassword("hi");
console.log(value);
//---------------------------

class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  introduce() {
    console.log(`hi, my name is ${this.name}`);
  }
}

class Developer extends Employee {
  constructor(name, salary, languages) {
    super(name, salary);
    this.languages = languages;
  }
  introduce() {
    console.log(
      `hi i am ${this.name}, a developer skilled in ${this.languages.join(
        ", "
      )}.`
    );
  }
}

const developer1 = new Developer("eda", 5000, ["html,css,js,react"]);
developer1.introduce();
