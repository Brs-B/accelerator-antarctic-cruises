let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let contacts = document.querySelector('.contacts__map');

if (header) {
  header.classList.remove('header--nojs');
}

if (nav) {
  nav.classList.remove('nav--nojs');
}

if (contacts) {
  contacts.classList.remove('contacts__map--nojs');
}
