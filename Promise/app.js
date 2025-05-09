// let check = false;
// const promise = new Promise((resolve, reject) => {
//     if (check)
//         resolve("promise basarılı")
//     else
//         reject("başarısız")
// })
// console.log(promise)

//----------------------------------------------------

// let check = false;

// function createPromise() {
//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("promise basarılı")
//         }
//         else
//             reject("promise basarısız")
//     })
// }
// createPromise()
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("her zaman çalışır.")
//     })

// function readStudents(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.status === 200 && xhr.readyState === 4) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })

//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET", url);
//         xhr.send();
//     })
// }
// readStudents("student.json")
//     .catch((error) => console.log(error))
//     .then((response) => console.log(response));

function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        response.forEach(element => {
            console.log(element.username);
        });
    })
    .catch((error) => {
        console.log(error)
    })
