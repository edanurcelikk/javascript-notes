const { Observable } = rxjs;

// observable oluşturduk.
const myObservable = new Observable((subscriber) => {
  subscriber.next("merhaba");
  subscriber.next("rxjs");
  subscriber.complete();
});

// observer tanımladık
const myObserver = {
  next: (value) => console.log("gelen veri:", value),
  error: (err) => console.log(err),
  complete: () => console.log("bitti"),
};

// observable'a abone ol
myObservable.subscribe(myObserver);
// subscribe observer'ı observable'a bağlar.
