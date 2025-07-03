// Simple auto-scroll carousel (horizontal)
const carousel = document.querySelector(".carousel-container");
let scrollAmount = 0;
let scrollStep = 1;

function autoScrollCarousel() {
  if (!carousel) return;

  scrollAmount += scrollStep;
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth || scrollAmount <= 0) {
    scrollStep *= -1;
  }

  carousel.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScrollCarousel);
}

document.addEventListener("DOMContentLoaded", () => {
  autoScrollCarousel();
});
