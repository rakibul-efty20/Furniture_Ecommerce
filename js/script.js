// Sticky Header Background on Scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});


// Mobile Menu
const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});