// subject hem observable(gözlemlenebilir) hem de observer(abonelik yapan) gibi davranan bir yapıdır.
// başkaları subjecte abone olabilir (fromevent interval gibi)
// ama dışarıdan ona manuel olarak da veri gönderebiliriz. (subject.next() ile)
// subject'in önemli olduğu yerler:
// - componentler anrasında veri akışı kurmak reactta context yerine rxjs
// - manual event yaymak(customevent gibi)
// - bir veriyi birdem fazla yere yaymak
// - aynı veriyi birden çok kişiye broadcast etmek.

const { Subject } = rxjs;

const subject = new Subject();

subject.subscribe((msg) => console.log("abone 1:", msg)); //abone 1
subject.subscribe((msg) => console.log("abone 2:", msg)); //abone 2

subject.next("merhaba"); // her iki aboneye de gider.
subject.next("selam");

// Yani bir Subject, birden fazla dinleyiciye aynı anda veri gönderir.

const stockSubject = new Subject();

const products = [
  { id: 1, name: "ayakkabı", stock: 5 },
  { id: 2, name: "çanta", stock: 3 },
  { id: 3, name: "tişört", stock: 0 },
];

const productContainer = document.getElementById("products");

function renderProducts() {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `${product.name} - stok: ${product.stock}`;
    productContainer.appendChild(div);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.visibility = "visible";

  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 3000);
}

renderProducts();

stockSubject.subscribe(() => {
  products.forEach((product) => (product.stock = 0));
  renderProducts();

  showToast("tüm ürünlerin stokları tükendi!");
});

document.getElementById("buy-button").addEventListener("click", () => {
  stockSubject.next();
});

// kullanıcı butona tıkladığında stockSubject.next(); çağırılıyor
// stockSubject üzerinden abonelere sinyal gönderilir.
// yukarıdaki abone tetiklenir ve stoklar sıfırlanır, toast gösterilir.
