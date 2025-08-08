// bir Observable’dan gelen her değere karşılık yeni bir iç Observable oluşturur.
// bu iç Observable’ların tümünü aynı anda paralel şekilde çalıştırır. Gelen tüm sonuçları da dışarıya yayar.
// Birden fazla asenkron işlem varsa ve bunların hepsi paralel çalışsın isteniyorsa kullanılır.
// örneğin API’den gelen her tetiklemeyi iptal etmek istemediğinde, yani tüm istekler sonuçlanana kadar beklemek istediğinde.

const { of, interval } = rxjs;
const { mergeMap, take, map } = rxjs.operators;

of("A", "B", "C")
  .pipe(
    mergeMap((letter) =>
      interval(1000).pipe(
        take(3),
        map((i) => letter + i)
      )
    )
  )
  .subscribe(console.log);
