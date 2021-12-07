const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');;

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() => (main.style.opacity = 1), 50);
    setTimeout(() => (header.style.opacity = 1), 50);
    setTimeout(() => (nav.style.opacity = 1), 50);
  }, 2000);
}

init();