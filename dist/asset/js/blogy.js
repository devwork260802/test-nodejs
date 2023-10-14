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

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navbar_links = document.querySelectorAll("[data-nav-link]");
const navbar_toggler = document.querySelector("[data-nav-toggler]");
const toggle_navbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}
add_event_on_element(navbar_toggler, "click", toggle_navbar);
const close_navbar = function () {
  navbar.classList.remove("active");
  navbar_toggler.classList.remove("active");
}
add_event_on_element(navbar_links, "click", close_navbar);

// Search Bar Toggle
const search_bar = document.querySelector("[data-search-bar]");
const search_togglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggle_search_bar = function () {
  search_bar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}
add_event_on_element(search_togglers, "click", toggle_search_bar);