const myObject = {
  city: "Madrid",
  greet() {
    console.log(`greetings from ${this.city}`);
  },
};

myObject.greet();
//-----------------------------
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("hi i'm" + this.name);
  };
}

const p1 = new Person("ali");
const p2 = new Person("edanur");
// new person'lar her çalıştığında name özelliği oluşur.
//sayHi fonksiyonu da yeniden bellekte oluşturulur.
//yani her nesne (p1,p2) kendi sayHi fonksiyonuna ayrı ayrı sahiptir.
//bu da gereksiz yer kaplar bellekte.
//eğer 1000 nesne varsa 1000 adet sayHi fonksiyonu kopyalanır.

//metodu prototype üzerinden yazarsak
function Person(name) {
  this.name = name;
}
//prototipe bir kez yazılır.
Person.prototype.sayHi = function () {
  console.log("hi i'm" + this.name);
};
//sayhi fonksiyonu sadece 1 kez tanımlandı. her nesne prototip zinciri üzerinden fonksiyona erişir.
const p3 = new Person("eda");

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
//-----------------------------
//method override
const date = new Date(1995, 11, 17);
console.log(date.getTime());
date.getTime = function () {
  console.log("something else");
};
date.getTime();
//-----------------------------
// Object.create:for creating new objects with a specific prototype.
// This prototype serves as a blueprint, determining the default properties and methods that the new object inherits.
const personPrototype = {
  greet() {
    console.log("hello");
  },
};
const carl = Object.create(personPrototype);
carl.greet();
//-----------------------------
const personPrototype2 = {
  greet() {
    console.log(`hello my name is ${this.name}`);
  },
};
function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, personPrototype2);
const ege = new Person("ege");
ege.greet();
//ege nesnesinde greet yok o yüzden prototipe baktık.

function Customer(name, surname) {
  this.name = name;
  this.surname = surname;
}

Customer.prototype.fullName = function () {
  return this.name + " " + this.surname;
};

const nur = new Customer("nur", "kaya");
console.log(nur.fullName());

const selin = new Person("selin");
console.log(Object.hasOwn(selin, "name"));
console.log(Object.hasOwn(selin, "greet"));
//-----------------------------
