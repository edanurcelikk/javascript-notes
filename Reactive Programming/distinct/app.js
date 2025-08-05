const { fromEvent } = rxjs;
const { map, distinctUntilChanged } = rxjs.operators;

const searchInput = document.getElementById("search");

fromEvent(searchInput, "input")
  .pipe(
    map((e) => e.target.value.trim().toLowerCase()),
    distinctUntilChanged() // daha önce gelen tüm değerlerlere bak sadece farklı olanları al
  )

  .subscribe((value) => {
    console.log("yeni değer:", value);
  });
