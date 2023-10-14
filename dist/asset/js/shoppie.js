//  Mobile Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const nav_toggler = document.querySelector("[data-nav-toggler]");
nav_toggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

// Header Active
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});