// promise.any : ilk başarılı promise'i döner.
// hepsi hata verirse catch çalışır.

//--------------------------
// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises)
//   .then((values) => console.log(values))
//   .catch((error) => console.log("error", error));
//--------------------------

// const pErr = new Promise((resolve, reject) => {
//   reject(new Error("Always fails"));
// });

// const pSlow = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "done eventually");
// });

// const pFast = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "done quick");
// });

// Promise.any([pErr, pFast]).then((value) => {
//   console.log(value);
// });
//--------------------------

const urls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSpWdJdXaVWLZmgRtzrUVzvvuCBdRsdqbHQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaCPHZvXA8tqyRHDSn5E1ZuxW-h5ocCJcMQ&s",
  "https://cdn.pixabay.com/photo/2022/10/21/00/28/lotus-7535941_1280.jpg",
];

function fetchImage(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
}

const imagePromises = urls.map((url) => fetchImage(url));

Promise.any(imagePromises)
  .then((firstImageURL) => {
    document.getElementById("img").src = firstImageURL;
  })
  .catch((error) => {
    console.error("tüm görseller yüklenemedi", error);
  });
