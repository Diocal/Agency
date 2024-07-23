document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('#carouselExampleCaptions');
if (!carousel) return;

const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('[data-twe-carousel-indicators] button');
let currentIndex = 0;

const changeSlide = (newIndex) => {
items[currentIndex].classList.remove('active');
items[newIndex].classList.add('active');

// Remove and re-add the animation class to trigger the animation
const textContainer = items[newIndex].querySelector('.text-container');
if (textContainer) {
textContainer.classList.remove('animate-slide-up');
// Trigger reflow
const reflow = textContainer.offsetWidth;
textContainer.classList.add('animate-slide-up');
}

if (newIndex > currentIndex) {
items[currentIndex].classList.add('carousel-item-prev');
items[newIndex].classList.add('carousel-item-next');
setTimeout(() => {
items[currentIndex].classList.remove('carousel-item-prev');
items[newIndex].classList.remove('carousel-item-next');
currentIndex = newIndex;
}, 600);
} else if (newIndex < currentIndex) {
items[currentIndex].classList.add('carousel-item-next');
items[newIndex].classList.add('carousel-item-prev');
setTimeout(() => {
items[currentIndex].classList.remove('carousel-item-next');
items[newIndex].classList.remove('carousel-item-prev');
currentIndex = newIndex;
}, 600);
}

indicators.forEach((indicator, index) => {
if (index === newIndex) {
indicator.classList.remove('opacity-50');
indicator.classList.add('opacity-100');
} else {
indicator.classList.remove('opacity-100');
indicator.classList.add('opacity-50');
}
});
};

const nextSlide = () => {
const nextIndex = (currentIndex + 1) % items.length;
changeSlide(nextIndex);
};

const prevSlide = () => {
const prevIndex = (currentIndex - 1 + items.length) % items.length;
changeSlide(prevIndex);
};

indicators.forEach((button, index) => {
button.addEventListener('click', () => changeSlide(index));
});

const nextButton = carousel.querySelector('[data-twe-slide="next"]');
const prevButton = carousel.querySelector('[data-twe-slide="prev"]');

if (nextButton) nextButton.addEventListener('click', nextSlide);
if (prevButton) prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
