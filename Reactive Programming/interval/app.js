// interval belirli aralıkla sayı üreten bir observable oluşturur.

const { interval, take, filter } = rxjs;

// const numbers = interval(1000); //1 saniyede bir sayı üret

// numbers.subscribe((n) => console.log("sayı:", n));

interval(1000)
  .pipe(take(5)) // take : sadece ilk 5 saniyeyi yazdır.
  .subscribe((value) => {
    console.log(`sayaç: ${value}`);
  });

const output = document.getElementById("output");

interval(1000)
  .pipe(take(10))
  .subscribe((value) => {
    const p = document.createElement("p");
    p.textContent = `saniye: ${value}`;
    output.appendChild(p);
  });

interval(1000)
  .pipe(
    filter((value) => value % 5 === 0),
    take(30)
  )
  .subscribe((value) => console.log(`5'in katları: ${value}`));
