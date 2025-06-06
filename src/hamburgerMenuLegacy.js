const menuIcon = document.querySelector('.menu-icon');
const navbarLinks = document.querySelector('.navbar-links');

export default function hamburgerMenuLegacy() {
  if (menuIcon && navbarLinks) {
    menuIcon.addEventListener('click', () => {
      navbarLinks.classList.toggle('navbar-links--open');
      menuIcon.classList.toggle('menu-icon--open');
    });
  }
}

