//We sent the fetch request . It returns a promise in the response type, and then we print the data we have captured with then. 
//The reason we use the second then is because it returns promise again when returning with json.

function getData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("student.json")

function saveStudents() {
    fetch("https://jsonplaceholder.typicode.com/albums"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
}