// Event Adder
const element_toggle_function = function (elem) { elem.classList.toggle("active"); }

// Navbar
const navbar = document.querySelector("[data-nav]");
const navbar_open_button = document.querySelector("[data-nav-open-btn]");
const navbar_close_button = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const navbar_element_array = [navbar_open_button, navbar_close_button, overlay];
for (let i = 0; i < navbar_element_array.length; i++) {
  navbar_element_array[i].addEventListener("click", function () {
    element_toggle_function(navbar);
    element_toggle_function(overlay);
    element_toggle_function(document.body);
  })
}

// Back to Top
const go_to_top_button = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    go_to_top_button.classList.add("active");
  } else {
    go_to_top_button.classList.remove("active");
  }
})