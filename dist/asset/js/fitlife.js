// Event Adder
const add_event_on_element = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Navbar
const navbar = document.querySelector("[data-navbar]");
const navbar_togglers = document.querySelectorAll("[data-nav-toggler]");
const navbar_links = document.querySelectorAll("[data-nav-link]");
const toggle_navbar = function () { navbar.classList.toggle("active"); }
add_event_on_element(navbar_togglers, "click", toggle_navbar);
const close_navbar = function () { navbar.classList.remove("active"); }
add_event_on_element(navbar_links, "click", close_navbar);

// Header and Back to Top
const header = document.querySelector("[data-header]");
const back_top_btn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    back_top_btn.classList.add("active");
  } else {
    header.classList.remove("active");
    back_top_btn.classList.remove("active");
  }
});