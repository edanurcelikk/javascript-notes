const catFound = new CustomEvent("animalFound", {
  detail: {
    name: "cat",
  },
});

const dogFound = new CustomEvent("animalFound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div");
element.addEventListener("animalFound", (e) => {
  console.log(e.detail.name);
});

element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

//---------------------------------

const loginEvent = new CustomEvent("user-logged-in", {
  detail: {
    username: "edanur",
    role: "admin",
  },
  bubbles: true,
  cancelable: true,
});

document.addEventListener("user-logged-in", function (e) {
  console.log("kullanıcı girişi:", e.detail.username);
});

document.dispatchEvent(loginEvent);

//---------------------------------

// const input = document.getElementById("username-input");
// const button = document.getElementById("submit-btn");
// const greetingBox = document.getElementById("greeting-box");

// greetingBox.addEventListener("usernameEntered", (e) => {
//   greetingBox.textContent = `Merhaba, ${e.detail.username}!`;
// });

// button.addEventListener("click", () => {
//   const username = input.value.trim();
//   if (!username) return;

//   const customEvent = new CustomEvent("usernameEntered", {
//     detail: {
//       username: username,
//     },
//   });

//   greetingBox.dispatchEvent(customEvent);
// });

//---------------------------------
// const button = document.getElementById("increase-btn");
// const display = document.getElementById("display");

// let count = 0;

// display.addEventListener("countUpdated", (e) => {
//   display.textContent = `Sayaç: ${e.detail.value}`;
// });

// button.addEventListener("click", () => {
//   count++;

//   const countEvent = new CustomEvent("countUpdated", {
//     detail: {
//       value: count,
//     },
//   });

//   display.dispatchEvent(countEvent);
// });
//---------------------------------
const saveBtn = document.getElementById("saveBtn");
const notificationBox = document.getElementById("notification");

notificationBox.addEventListener("notify", (e) => {
  notificationBox.textContent = e.detail.message;
  notificationBox.style.display = "block";

  setTimeout(() => {
    notificationBox.style.display = "none";
  }, 3000);
});

saveBtn.addEventListener("click", () => {
  const notifyEvent = new CustomEvent("notify", {
    detail: {
      message: "değişiklikler başarıyla kaydedildi.",
    },
  });
  notificationBox.dispatchEvent(notifyEvent);
});
