const menu = document.querySelector('.main-nav');
const menuButton = document.querySelector('.burger');

menuButton.addEventListener('click', ()=> {
  menu.classList.toggle('main-nav--open');
  menuButton.classList.toggle('burger--active');
});
