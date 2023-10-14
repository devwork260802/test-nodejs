// Event Adder
const element_toggle_function = function (elem) { elem.classList.toggle("active"); }

// Navbar
const navbar = document.querySelector("[data-navbar]");
const navbar_toggle_btn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");
const navbar_element_array = [navbar_toggle_btn, overlay];
for (let i = 0; i < navbar_element_array.length; i++) {
  navbar_element_array[i].addEventListener("click", function () {
    element_toggle_function(navbar);
    element_toggle_function(overlay);
  });
}

// Header
const header = document.querySelector("[data-header]");
let last_scroll_position = 0;
window.addEventListener("scroll", function () {
  let scroll_position = window.pageYOffset;

  if (scroll_position > last_scroll_position) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
  last_scroll_position = scroll_position <= 0 ? 0 : scroll_position;
});

// Form
const input = document.querySelector("[data-input]");
const submit_btn = document.querySelector("[data-submit]");
input.addEventListener("input", function () {
  if (input.checkValidity()) {
    submit_btn.removeAttribute("disabled");
  } else {
    submit_btn.setAttribute("disabled", "");
  }
});

// Back to Top
const back_to_top = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? back_to_top.classList.add("active") : back_to_top.classList.remove("active");
});