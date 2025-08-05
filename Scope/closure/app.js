function outerFunction() {
  const outerVariable = "ben function scope'tayım.";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}
const myFunction = outerFunction();
myFunction();

// outerVariable değişkeni outerFunction çalışmayı bitirdikten sonra bile,
// myFunction tarafından erişilebilir durumda kalır.

function bankAccount() {
  let balance = 30;

  function deposit(amount) {
    balance += amount;
  }

  deposit(10);

  return balance;
}
console.log(bankAccount());
console.log(bankAccount());
console.log(bankAccount());

//fonksiyon her çağırıldığında balance değişkeni tekrar 30a eşitleniyor
//bu durumu değiştirmek için closure kullanıyoruz.

function bankAccount() {
  let balance = 30;

  function deposit(amount) {
    balance += amount;
    return balance;
  }
  return deposit;
}

const myAccount = bankAccount();
//balance artık dışarıdan erişilemez ama myAccount aracılığıyla güncellenebilir.
console.log(myAccount(20));
console.log(myAccount(40));
//deposit fonksiyonu kendi lexical scope’undaki balance değişkenine
//erişebildiği için onu değiştirebiliyor.
//bankAccount fonksiyonu tekrardan çağırılmadığı için balance değişkeni
//tekrar tekrar 30 sayısına eşitlenmiyor ve bakiye artışı sağlanmış oluyor.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      if (count > 0) {
        count--;
        console.log(count);
      }
    },
    reset: function () {
      count = 0;
      console.log("sıfırlandı");
    },
    get: function () {
      console.log(count);
    },
    set: function (number) {
      if (typeof number === "number") {
        count = number;
        console.log(count);
      } else {
        console.log("hatalı, sayı giriniz.");
      }
    },
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.get();
counter.reset();
counter.set(20);
counter.decrement();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));
