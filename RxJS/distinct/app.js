const { fromEvent } = rxjs;
const { map, distinct } = rxjs.operators;

const searchInput = document.getElementById("search");

fromEvent(searchInput, "input")
  .pipe(
    map((e) => e.target.value.trim().toLowerCase()),
    distinct() // daha önce gelen tüm değerlerlere bak sadece farklı olanları al
  )

  .subscribe((value) => {
    console.log("yeni değer:", value);
  });
