// synchronous -> micro tasks (Promise, queueMicrotask) -> macro tasks (setTimeout() , setInterval() ,setImmediate())

// console.log('A'); // synchronous

// setTimeout(() => {
//   console.log('B'); // macrotask
// }, 0);

// console.log('C'); // synchronous

//------------------------------

// console.log('A');

// setTimeout(() => {
//   console.log('B'); // macrotask
// }, 0);

// Promise.resolve().then(() => {
//   console.log('C'); // microtask
// });

// console.log('D');
//------------------------------

// Promise.resolve().then(() => {
//   console.log('A');
//   Promise.resolve().then(() => console.log('B'));
// });

// console.log('C');
//------------------------------

// document.body.addEventListener("click", () => {
//   console.log("click event"); // macrotask
// });

// Promise.resolve().then(() => console.log("promise resolved")); // microtask
// console.log("end");
//------------------------------

// setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// Promise.resolve().then(() => console.log("D"));
//------------------------------

// console.log("A");

// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
//   setTimeout(() => {
//     console.log("E");
//   }, 0);
// });

// console.log("F");
//------------------------------

// console.log("1");

// setTimeout(() => {
//   console.log("2");
//   Promise.resolve()
//     .then(() => {
//       console.log("3");
//     })
//     .then(() => {
//       console.log("4");
//     });
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("5");
//   })
//   .then(() => {
//     console.log("6");
//   });

// console.log("7");
//------------------------------
// console.log("start");

// setTimeout(() => {
//   console.log("timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("promise 1");
//     setTimeout(() => {
//       console.log("timeout 2");
//     }, 0);
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("promise 2");
//   });

// console.log("end");
//------------------------------
// setTimeout(() => {
//   console.log("timer 1");
//   Promise.resolve().then(() => {
//     console.log("microtask 1");
//     Promise.resolve().then(() => {
//       console.log("microtask 2");
//     });
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("microtask 3");
// });

// console.log("main Task");
//------------------------------
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 1");
    })
    .then(() => {
      console.log("promise 2");
    });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 3");
    setTimeout(() => {
      console.log("timeout 2");
    }, 0);
    return Promise.resolve();
  })
  .then(() => {
    console.log("promise 4");
  });

console.log("end");
