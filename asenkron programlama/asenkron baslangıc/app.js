const users = [
    {
        userId: 5,
        post: "Enes Post 1"
    },
    {
        userId: 5,
        post: "Enes Post 2"
    },
    {
        userId: 5,
        post: "Enes Post 3"
    },
    {
        userId: 6,
        post: "Ali Post 1"
    },
    {
        userId: 7,
        post: "Betül Post 1"
    },
]

// function getUserId() {
//     setTimeout(() => {
//         return 5;
//     }, 1000);
// }

// function getPostByUserId(userId) {
//     setTimeout(() => {
//         users.forEach(user => {
//             if (user.userId === userId) {
//                 console.log(user.post);
//             }
//         });
//     }, 500);
// }

// const userId = getUserId();
// getPostByUserId(userId);

//callback: bir fonksiyona parametre olarak diğer fonksiyonu vermek

// function getName(callback) {
//     setTimeout(() => {
//         let name = "edanur";
//         callback(name);
//     }, 1000);
// }
// function getSurname(name) {
//     setTimeout(() => {
//         let surname = "çelik";
//         console.log(name, surname)
//     }, 500);
// }

// getName(getSurname);
// getSurname();


// function getName(callback) {
//     setTimeout(() => {
//         let name = "edanur";
//         callback(name);
//     }, 1000);
// }
// function getSurname(name, callback) {
//     setTimeout(() => {
//         let surname = "çelik";
//         callback(surname);
//     }, 500);
// }

// function getAge(name, surname, callback) {
//     let age = 23;
//     callback(age);
// }

// getName((name) => {
//     getSurname(name, (surname) => {
//         getAge(name, surname, (age) => {
//             setTimeout(() => {
//                 console.log(name, surname, age);
//             }, 100);
//         })
//     })
// })

// function getUserId(callback) {
//     setTimeout(() => {
//         let userId = 5;
//         callback(userId);
//     }, 1000);
// }

// function getPostByUserId(userId, callback) {
//     setTimeout(() => {
//         users.forEach(user => {
//             if (user.userId === userId) {
//                 let userPost = user.post
//                 callback(userPost);
//             }
//         });
//     }, 500);
// }


// getUserId((userId) => {
//     getPostByUserId(userId, (userPost) => {
//         setTimeout(() => {
//             console.log(userId, userPost)
//         }, 100);
//     })
// })

// function prepareUrl(url, id) {
//     if (id === null) {
//         return url;
//     }
//     return `${url}?postId=${id}`;
// }
// function getComments(url, id) {
//     let newUrl = prepareUrl(url, id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })
//     xhr.open("GET", newUrl);
//     xhr.send()
// }

// getComments("https://jsonplaceholder.typicode.com/comments", null)

// function prepareURL(url, id) {
//     if (id === null) {
//         return url;
//     }
//     return `${url}?postId=${id}`;
// }
// function getComments(url, id) {
//     let newUrl = prepareURL(url, id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.responseText));
//         }
//     })
//     xhr.open("GET", newUrl)
//     xhr.send();
// }

// function getUsers(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", () => {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             console.log(xhr.responseText);
//         }
//     })
//     xhr.open("GET", url);
//     xhr.send();
// }

// getComments("https://jsonplaceholder.typicode.com/comments", 2)

// getUsers("https://jsonplaceholder.typicode.com/users");

// let check = false;
// const promise = new Promise((resolve, reject) => {
//     if (check)
//         resolve("promise basarılı")
//     else
//         reject("başarısız")
// })
// console.log(promise)

let check = false;

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("promise basarılı")
        }
        else
            reject("promise basarısız")
    })
}
createPromise()
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("her zaman çalışır.")
    })