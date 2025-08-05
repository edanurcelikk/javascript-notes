// Promise.race(): ilk tamamlanan Promise'in sonucunu döner.
// başarılı ya da hatalı fark etmez.
//--------------------------
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });
// Promise.race([promise1, promise2]).then((response) => console.log(response));
//--------------------------
// function sleep(time, value, state) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfill") {
//         resolve(value);
//       } else {
//         reject(new Error(value));
//       }
//     }, time);
//   });
// }
// const p1 = sleep(500, "one", "fulfill");
// const p2 = sleep(100, "two", "fulfill");

// Promise.race([p1, p2]).then((value) => {
//   console.log(value);
// });

// const p3 = sleep(100, "three", "fulfill");
// const p4 = sleep(500, "four", "reject");

// Promise.race([p3, p4]).then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     //not called
//   }
// );

// const p5 = sleep(500, "five", "fulfill");
// const p6 = sleep(100, "six", "reject");

// Promise.race([p5, p6]).then(
//   (value) => {
//     //not called
//   },
//   (error) => {
//     console.error(error.message);
//   }
// );
//--------------------------
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
// const p = Promise.race(resolvedPromisesArray);
// console.log(p);

// setTimeout(() => {
//   console.log("the stack is now empty");
//   console.log(p);
// });

// Logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 33 }
//--------------------------
// const foreverPendingPromise = Promise.race([]);
// console.log(foreverPendingPromise);
// setTimeout(() => {
//   console.log("the stack is now empty");
//   console.log(foreverPendingPromise);
// });

// an empty iterable causes the returned promise to be forever pending
// Logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
//--------------------------

// const foreverPendingPromise = Promise.race([]);
// const alreadyFulfilledProm = Promise.resolve(100);

// const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
// const arr2 = [foreverPendingPromise, "non-Promise value", alreadyFulfilledProm];

// const p = Promise.race(arr);
// const p2 = Promise.race(arr2);

// console.log(p);
// console.log(p2);

// setTimeout(() => {
//   console.log("the stack is now empty");
//   console.log(p);
//   console.log(p2);
// });

// if the iterable contains one or more non-promise value and/or an already settled promise,
// then Promise.race will settle to the first of these values found in the array

// Logs, in order:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
//--------------------------
