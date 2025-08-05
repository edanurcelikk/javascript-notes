// Promise.withResolvers(): resolve/reject fonksiyonlarına
// fonksiyon dışında da erişebilmek için kullanılır.
// promise'ı manuel kontrol etmek için kullanılır.
// örneğin özel event sistemlerinde,timeout,retry gibi yapılarda.

// const { promise, resolve, reject } = Promise.withResolvers(); //destructing

// setTimeout(() => {
//   resolve("veri başarıyla yüklendi!");
// }, 1000);
// promise.then((data) => {
//   console.log(data);
// });
