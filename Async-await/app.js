// async function hello() {
//     return "hello world";
// }

// hello()
//     .then((response) => {
//         console.log(response)
//     }).catch((err) => {
//         console.log(err)
//     });`

// document.getElementById("btn").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((response) => response.json())
//         .then((data) =>
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
//                 .then((response) => response.json())
//                 .then((post) => console.log(post)
//                 ))
// })

// document.getElementById("btn").addEventListener("click", async () => {
//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await posts.json()
//     const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
//     const comments = await response.json()
//     console.log(comments);
// })

document.getElementById("btn").addEventListener("click", async () => {
    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`)).json()
    console.log(comments);
})
