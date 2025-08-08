const { fromEvent } = rxjs;
const { map } = rxjs.operators;

const clicks = fromEvent(document, "click");

clicks
  .pipe(map((event) => `X: ${event.clientX}, Y: ${event.clientY}`))
  .subscribe((coord) => console.log("tıklama:", coord));

// her gelen event nesnesiniyle clientx clienty değerlerini çektik.
// bunları string haline getirip subscribe'a yolladık.
// map ile subscribe fonksiyonuna sadece istediğimiz veriyi göndeririz.
