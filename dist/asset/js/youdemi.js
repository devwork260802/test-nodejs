// Event Adder
const add_event_on_elements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// Preloader
const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  circle.style.animation = "none";
  document.body.classList.add("loaded");
});

// Navbar
const navbar = document.querySelector("[data-navbar]");
const navbar_togglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggle_navbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
add_event_on_elements(navbar_togglers, "click", toggle_navbar);

// Header
const header = document.querySelector("[data-header]");
const header_active = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
window.addEventListener("scroll", header_active);