// Navbar 
const navbar_open_btn = document.querySelector("[data-menu-open-btn]");
const navbar_close_btn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navbar_element_array = [navbar_open_btn, navbar_close_btn, overlay];
for (let i = 0; i < navbar_element_array.length; i++) {
  navbar_element_array[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  window.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");
});



/**
 * go top
 */

// Back to Top
const back_to_top = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 800 ? back_to_top.classList.add("active") : back_to_top.classList.remove("active");
});