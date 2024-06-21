const sliderButtonPrev = document.querySelector('.slider__button--prev');
const sliderButtonNext = document.querySelector('.slider__button--next');
const sliderLine = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__pagination-button');
const slider = document.querySelector('.slider');

let sliderCount = 0;
let sliderWidth = 0;

window.addEventListener('resize', showSlide);

const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

const disableButton = () => {
  sliderButtonNext.disabled = false;
  sliderButtonPrev.disabled = false;
  if (sliderCount === 0) {
    sliderButtonPrev.disabled = true;
  }
  if (sliderCount === slides.length - 1) {
    sliderButtonNext.disabled = true;
  }
}

disableButton();

const thisSlide = (index) => {
  sliderDots.forEach(item => item.classList.remove('slider__pagination-button--current'));
  sliderDots[index].classList.add('slider__pagination-button--current');
}

const showSlide = () => {
  sliderWidth = slider.offsetWidth;
  sliderLine.style.width = sliderWidth * slides.length + 'px';
  slides.forEach(item => item.style.width = sliderWidth + 'px');

  rollSlider();
}

showSlide();

const nextSlide = () => {
  sliderCount++;

  if (sliderCount >= slides.length) {
    sliderCount = slides.length - 1;
  }

  disableButton();
  rollSlider();
  thisSlide(sliderCount);
}

const prevSlide = () => {
  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = 0;
  }

  disableButton();
  rollSlider();
  thisSlide(sliderCount);
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', ()=> {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
    disableButton();
  })
})

sliderButtonPrev.addEventListener('click', prevSlide);
sliderButtonNext.addEventListener('click', nextSlide);
