const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementById('nav');

hamburgerMenu.onclick = showNav;

function showNav() {
  if(nav.className === 'right') {
    hamburgerMenu.classList.replace('fa-bars', 'fa-xmark');
    nav.classList.add('show-nav');
  } else {
    hamburgerMenu.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.remove('show-nav');
  }
}
