// takeUntil: bir Observable'dan gelen değerleri, başka bir Observable bir değer yayımlayana kadar yaymaya devam eder.
// Bir kaynak Observable (örneğin mouse hareketleri), bir de durdurucu Observable (örneğin bir butona tıklanması) vardır.
// Durdurucu Observable tetiklenirse, kaynak Observable otomatik olarak tamamlanır (unsubscribe olur).

// Nerede Kullanılır?
// - Memory leak önlemek için.
// - Kullanıcı bir aksiyon aldığında uzun süre devam eden işlemleri durdurmak için.
// - interval, fromEvent, ajax, vs. gibi sonsuz akışlarda işlemi sonlandırmak için.

const { fromEvent } = rxjs;
const { takeUntil, map } = rxjs.operators;

const mouseMoves = fromEvent(document, "mousemove");
const stopClick = fromEvent(document.getElementById("stop-btn"), "click");

mouseMoves
  .pipe(
    map((e) => `X:${e.clientX} , Y: ${e.clientY}`),
    takeUntil(stopClick)
  )

  .subscribe((position) => {
    document.getElementById("output").textContent = position;
  });
