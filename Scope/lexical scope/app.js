function init() {
  var name = "edanur";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();

let variable = "ben dış scope'tayım.";
function showVariable() {
  console.log(variable);
}
function printVariable() {
  let variable = "ben iç scope'tayım.";
  showVariable();
}
printVariable(); //ben dış scope'tayım.
//fonksiyonun çağırıldığı yer değil tanımlandığı bloktaki değişkenlere erişimi var.
