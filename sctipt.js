const bannerContent = document.querySelector('.banner-content');
const slides = document.querySelectorAll('.banner-slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.banner-slide').length;

function updateCarousel() {
  const offset = -currentIndex * 100; // Calcula o deslocamento horizontal
  bannerContent.style.transform = `translateX(${offset}%)`;
}

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop para o final
  updateCarousel();
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loop para o início
  updateCarousel();
});

// Inicializa o carrossel
updateCarousel();



