const btn = document.getElementById("catalog-btn");
const catalogCard = document.getElementById("catalog-card");
btn.addEventListener("click", myButtonFunc);
function myButtonFunc() {
  catalogCard.classList.toggle("animation-class");
}
