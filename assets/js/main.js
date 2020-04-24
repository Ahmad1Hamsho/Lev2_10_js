const element = document.getElementById("element");
function small() {
  element.classList.add("small");
  element.classList.remove("middle", "big");
}
function middle() {
  element.classList.add("middle");
  element.classList.remove("small", "big");
}
function big() {
  element.classList.add("big");
  element.classList.remove("small", "middle");
}
