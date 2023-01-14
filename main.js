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
  console.log(
    `startX(${startX}) = e.offsetX(${e.offsetX}) - carousel.offsetLeft(${carousel.offsetLeft})`
  );
});

gallery.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault;

  x = e.offsetX;

  carousel.style.left = `${x - startX}px`;
  console.log(x, startX);
});

gallery.addEventListener("mouseup", () => {
  gallery.style.cursor = "grab";
  pressed = false;
});
