// debounceTime : belirttiğin süre boyunca başka bir yayın gelmezse,
// son değeri yayınlar.
// kullanıcı yazmaya başladığında bekler, belirttiğin süre içinde başka bir tuş basılmazsa tek bir değer gönderir.
// çok fazla gereksiz işlem yapılmasını önler.
// arama kutularında(her tuşta değil yazmayı bitirdikten sonra arama yapılmasını sağlar), butona hızlı tıklamalarda, form inputlarında,
// API isteklerini azaltmak için kullanılır.

const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Evelyn",
  "Fatma",
  "Gökhan",
  "Hüseyin",
  "İrem",
  "Zeynep",
];

const { fromEvent, debounceTime, filter, map } = rxjs;

const search = document.getElementById("search");
const results = document.getElementById("results");

fromEvent(search, "input")
  .pipe(
    map((e) => e.target.value.trim()),
    debounceTime(200),
    filter((text) => text.length > 0)
  )
  .subscribe((searchText) => {
    const filteredUsers = users.filter((user) =>
      user.toLowerCase().includes(searchText.toLowerCase())
    );
    results.innerHTML = "";
    filteredUsers.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      results.appendChild(li);
    });
  });
