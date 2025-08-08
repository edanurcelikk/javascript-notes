// subscribe içindeki parametreler, Observable’dan gelen verileri,
// hataları ve tamamlanma durumunu nasıl işleyeceğini belirten fonksiyonlardır.
// observable.subscribe({
//   next(value) {
//     // Yeni veri geldiğinde burası çalışır
//   },
//   error(err) {
//     // Hata varsa burası çalışır
//   },
//   complete() {
//     // Akış tamamlanınca burası çalışır
//   }
// });

const { Observable, Subject } = rxjs;

const observable = new Observable((subscriber) => {
  subscriber.next(1); //senkron
  subscriber.next(2); //senkron
  subscriber.next(3); //senkron

  setTimeout(() => {
    //macrotask
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
// observable oluştururken abone olanlara ne yapılacağı
// (hangi veriler gönderilecek, ne zaman tamamlanacak vb.) bu fonksiyonda tanımlanır.

console.log("just before subscribe"); //senkron

observable.subscribe({
  next(x) {
    console.log("got value" + x);
  },
  error(err) {
    console.error("something wrong" + err);
  },
  complete() {
    console.log("done");
  },
});

console.log("just after subscribe"); //senkron
//----------------------------------------------
// function foo() {
//   console.log("hello");
//   return 42;
// }
// const x = foo();
// console.log(x);
// const y = foo();
// console.log(y);

// cold observable örneği: rxjs observable'ların default olarak cold olduğunu gösterir.
// yani her abone subscribe olduğunda yeninden başlar. içindeki kod her abonelikte tekrar çalışır.
const foo = new Observable((subscriber) => {
  console.log("hello");
  subscriber.next(42);
});

foo.subscribe((x) => {
  console.log(x);
});
foo.subscribe((y) => {
  console.log(y);
});

// cold observable: her subscribe olduğunda observable içindeki kod yeniden çalışır.
// her aboneye ayrı ayrı veri akışı başlar.
// örneğin bi http isteği her abonede yeniden yapılır ama aynı veriyi paylaşmak isteyince,
// kaynak kullanımı azaltmak isteyince, gerçek zamanlı bir yayını tüm abonelerle paylaşmak isteyince
// cold observable pek tercih edilmez.

// hot observable: observable bir kez çalışır ve sonucu birden çok aboneyle paylaşır.
// aboneler akış başlamadan veya başladıktan sonra katılabilir.
// örneğin canlı yayın gibi yayın bir kez başlar ve herkes onu izler.
// hot observable paylaşılan kaynak gibi davranır.
// hot observable oluşturmak için subject kullanırız.
// subject hem observer hem observable'dır.
// veri Subject.next() ile dışarıdan verilir.
// Subject.subscribe() ile aboneler dinler.

const cold = new Observable((subscriber) => {
  console.log("cold observale started");
  subscriber.next(Math.random());
});

cold.subscribe((x) => console.log("subscriber 1", x));
cold.subscribe((x) => console.log("subscriber 2", x));
//her abone ayrı ayrı random sayı alıyor, observable 2 kez başlıyor.

const subject = new Subject();

subject.subscribe((x) => console.log("subscriber 1:", x));
subject.subscribe((x) => console.log("subscriber 2:", x));

subject.next(Math.random());
//burada math.random() sadece bir kere üretiliyor ve aynı değer tüm aboneler gönderiliyor.

//------------------------------
// observables asenkron değildir.
console.log("before");
console.log(foo());
console.log("after");

console.log("before");
foo.subscribe((x) => {
  console.log(x);
});
console.log("after");

// foo senkrondur bir fonksiyon gibi
//------------------------------
// observable vs functions
// observables can return multiple values over time something which functions cannot.

function foo() {
  console.log("hello");
  return 42;
  return 100; // dead code. will never happen
}

const foo = new Observable((subscriber) => {
  console.log("Hello");
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log("before");
foo.subscribe((x) => {
  console.log(x);
});
console.log("after");

// func.call() = give me one value synchronously
// observable.subscribe() = give me any amount of values, either synchronously or asynchronously
