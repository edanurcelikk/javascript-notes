// promise all : birden fazla promise'i çalıştırmak için
// hepsi başarılıysa then biri bile hatalıysa catch çalışır

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 300, "hello");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hi");
//   }, 200);
// });
// Promise.all([p1, p2, p3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// const promise11 = Promise.all([1, 2, 3]);
// const promise22 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// const promise33 = Promise.all([1, 2, 3, Promise.reject(new Error("bad"))]);

// setTimeout(() => {
//   console.log(promise11);
//   console.log(promise22);
//   console.log(promise33);
// });

//-------------------------
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)]; //senkron
// const p = Promise.all(resolvedPromisesArray); //senkron promise.all henüz çözülmedi
// console.log(p); //henüz çözülmediği için pending

// setTimeout(() => {
//   console.log("the queue is now empty"); //macrotask ilk çıktı
//   console.log(p); //microtaskta sonuçlandığı için burda fulfilled
// });

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }

// promise.resolve() ile oluşturulan promiseler hemen çözümlenir
// ama javascript bunları doğrudan çözmez önce microtask kuyruğuna atar.
// Promise.resolve(33) ve Promise.resolve(44) çözümlenir
// promise.all bu çözümleri alır ve kendi sonucunu oluşturur ama bu sonuç microtask kuyrugundadır.
// yani promise.all da microtask kuyrugundadır
// senkron kodlar bitmeden microtask kuyruguna gecilmez
// dolayısıyla console.log(p) satırı henüz çözülmeden fulfilled olmadan çalışır
// o yüzden en başta Promise { <state>: "pending" } henüz çözülmediği için
// setTimeout ise macrotasktır. js senkron->microtask->macrotask sırasıyla kodları çalıştırır.
// p microtask kuyrugundayken çözümlenmiş olduğu için macrotaska yani settimeout'a geçince fulfilled durumdadır.
// burda console.log senkron oldugu icin hemen calısır daha sonra promise.then microtask oldugu için çalışır.
// daha sonra promise.all microtask olduğu için ve içindeki promiseler çözüldükten sonra çalışır.
// en son settimeout macrotask olduğu için çalışır.

//------------------------
// const mixedPromisesArray = [
//   Promise.resolve(33),
//   Promise.reject(new Error("bad")),
// ];

// const p = Promise.all(mixedPromisesArray);

// console.log(p);

// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

// output: Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: Error: bad }

//------------------------
// const p = Promise.all([]); //empty array will be immediately resolved
// const p2 = Promise.all([1337, "hi"]); //evaluation is done asychronously
// console.log(p);
// console.log(p2);
// setTimeout(() => {
//   console.log("the queue is empty");
//   console.log(p2);
// });

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
