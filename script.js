const carousel = document.querySelector(".carousel");
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevSCrollLeft;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {});
});

const dragStart = (e) => {
  // updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX;
  prevSCrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevSCrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
