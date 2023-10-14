// Add Event on Element
const add_event_on_element = function (element, type, callback) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
}

// Navbar Toggle
const navbar = document.querySelector("[data-navbar");
const nav_toggler = document.querySelector("[data-nav-toggler]");
const navbar_links = document.querySelectorAll("[data-nav-link]");
const toggle_navbar = function () {
  navbar.classList.toggle("active");
  nav_toggler.classList.toggle("active");
  document.body.classList.toggle("active");
}
add_event_on_element(nav_toggler, "click", toggle_navbar);
const close_navbar = function () {
  navbar.classList.remove("active");
  nav_toggler.classList.remove("active");
  document.body.classList.remove("active");
}
add_event_on_element(navbar_links, "click", close_navbar);

// Active Header and Back to Top Button when scroll down to 100px
const header = document.querySelector("[data-header]");
const back_top_btn = document.querySelector("[data-back-top-btn]");
const active_element_on_scroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    back_top_btn.classList.add("active");
  } else {
    header.classList.remove("active");
    back_top_btn.classList.remove("active");
  }
}
add_event_on_element(window, "scroll", active_element_on_scroll);