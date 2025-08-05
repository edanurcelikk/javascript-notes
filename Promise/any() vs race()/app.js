//comparison Promise.any() and Promise.race()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "two");
// });
// Promise.race([promise1, promise2])
//   .then((value) => {
//     console.log("succeded with value:", value);
//   })
//   .catch((reason) => {
//     console.error("failed with reason:", reason);
//   });

// const promise11 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });
// const promise22 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "two");
// });

// Promise.any([promise11, promise22])
//   .then((value) => {
//     console.log("succeded with value", value);
//   })
//   .catch((reason) => {
//     console.log("failed with reason:", reason);
//   });
