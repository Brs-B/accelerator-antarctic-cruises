let body = document.querySelector('body');
let nav = document.querySelector('.nav');
let toggle = document.querySelector('.nav__toggle');
let header = document.querySelector('.header');
let headerWrapper = document.querySelector('.header__wrapper');

if (toggle) {
  toggle.addEventListener('click', function () {
    if (nav.classList.contains('nav--closed')) {
      nav.classList.remove('nav--closed');
      nav.classList.add('nav--opened');
      headerWrapper.classList.remove('header__wrapper--closed');
      headerWrapper.classList.add('header__wrapper--opened');
      header.classList.remove('header--closed');
      header.classList.add('header--opened');
      body.classList.add('locked');
    } else {
      nav.classList.add('nav--closed');
      nav.classList.remove('nav--opened');
      headerWrapper.classList.remove('header__wrapper--opened');
      headerWrapper.classList.add('header__wrapper--closed');
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
      body.classList.remove('locked');
    }
  });
}

if (header) {
  header.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('header__overlay')) {
      header.classList.remove('header--opened');
      header.classList.add('header--closed');
      headerWrapper.classList.remove('header__wrapper--opened');
      headerWrapper.classList.add('header__wrapper--closed');
      nav.classList.remove('nav--opened');
      nav.classList.add('nav--closed');
      body.classList.remove('locked');
    }
  });
}
