let modal = document.getElementById("modal");
let openModal = document.getElementById("open-modal");
let closeButton = document.getElementById("close-button");
let html = document.querySelector("html");
openModal.addEventListener("click", modalOpen);
closeButton.addEventListener("click", modalClose);
modal.addEventListener("click", modalWindow);
function modalOpen() {
  modal.classList.add("openmodal");
  html.style.overflow = "hidden";
  //   modal.style.display = "flex";
}
function modalClose() {
  modal.classList.remove("openmodal");
  html.style.overflow = "hidden";

  //   modal.style.display = "flex";
}
function modalWindow() {
  modal.classList.remove("openmodal");
  html.style.overflow = "hidden";

  // modal.style.backgroundColor = "black";
}

// let obj = {
//   firstname: "Elbotir",
//   lastName: "Asadov",
//   age: 23,
// };
// // let userStr = JSON.stringify(obj);
// // console.log(userStr);
// // let normalObj = JSON.parse(userStr);
// // console.log(normalObj);
// // let yu = localStorage.setItem("obj", JSON.stringify(obj));
// // localStorage.removeItem("obj");
// // let u = JSON.parse(localStorage.getItem("obj"));
// // console.log(u);
// document.cookie = "username=John";
