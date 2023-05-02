let nav = document.querySelector('.nav');
let toggle = document.querySelector('.nav__toggle');
let headerWrapper = document.querySelector('.header__wrapper');

if (toggle) {
  toggle.addEventListener('click', function () {
    if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
    }
    if (headerWrapper.classList.contains('header__wrapper--closed')) {
      headerWrapper.classList.remove('header__wrapper--closed');
      headerWrapper.classList.add('header__wrapper--opened');
    } else {
      headerWrapper.classList.remove('header__wrapper--opened');
      headerWrapper.classList.add('header__wrapper--closed');
    }
  });
}
