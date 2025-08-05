const { fromEvent, of } = rxjs;
const { debounceTime, map, switchMap } = rxjs.operators;

// of: Observable şeklinde sabit bir değer döndürmek için kullanılır (örneğin boş liste)

function getData(query) {
  const allProducts = ["ayakkabı", "çanta", "tişört", "ceket", "şapka"];
  const results = allProducts.filter((item) =>
    item.includes(query.toLowerCase())
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 500);
  });
}

const searchInput = document.getElementById("search");
const resultList = document.getElementById("results");

fromEvent(searchInput, "input")
  .pipe(
    debounceTime(300),
    map((e) => e.target.value.trim()),
    switchMap((text) => {
      if (text === "") return of([]);
      return getData(text);
    })
  )

  // switchMap: her yeni input değeri geldiğinde, önceki isteği iptal eder.

  .subscribe((filtered) => {
    resultList.innerHTML = "";
    filtered.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product;
      resultList.appendChild(li);
    });
  });
