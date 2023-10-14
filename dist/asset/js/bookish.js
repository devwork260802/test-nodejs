// Event Adder
const add_event_to_element = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Toggle Navbar
const navbar = document.querySelector("[data-navbar]");
const navbar_links = document.querySelectorAll("[data-nav-link]");
const navbar_toggler = document.querySelector("[data-nav-toggler]");
const toggle_navbar = function () {
  navbar.classList.toggle("active");
  navbar_toggler.classList.toggle("active");
}
add_event_to_element(navbar_toggler, 'click', toggle_navbar);
const close_navbar = function () {
  navbar.classList.remove("active");
  navbar_toggler.classList.remove("active");
}
add_event_to_element(navbar_links, "click", close_navbar);

// Header
const header = document.querySelector("[data-header]");
const active_header = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
add_event_to_element(window, "scroll", active_header);

// Filter
const tab_card = document.querySelectorAll("[data-tab-card]");
let last_tab_card = tab_card[0];
const navigate_tab = function () {
  last_tab_card.classList.remove("active");
  this.classList.add("active");
  last_tab_card = this;
}
add_event_to_element(tab_card, "click", navigate_tab);