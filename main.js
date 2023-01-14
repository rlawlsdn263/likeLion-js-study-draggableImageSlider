const gallery = document.querySelector(".gallery");
const carousel = document.querySelector(".gallery-carousel");

let pressed = false;
let startX;
let x;

gallery.addEventListener("mouseenter", () => {
  gallery.style.cursor = "grab";
});

gallery.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.offsetX - carousel.offsetLeft;
  gallery.style.cursor = "grabbing";
  console.log(e.offsetX, carousel.offsetLeft);
});

gallery.addEventListener("mouseup", () => {
  gallery.style.cursor = "grab";
  pressed = false;
});
