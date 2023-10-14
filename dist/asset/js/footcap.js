// Navbar Toggle
const overlay = document.querySelector("[data-overlay]");
const navbar_open_button = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navbar_close_button = document.querySelector("[data-nav-close-btn]");
const navbar_elements = [overlay, navbar_open_button, navbar_close_button];
for (let i = 0; i < navbar_elements.length; i++) {
  navbar_elements[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Header aand Back to Top 
const header = document.querySelector("[data-header]");
const back_to_top = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    back_to_top.classList.add("active");
  } else {
    header.classList.remove("active");
    back_to_top.classList.remove("active");
  }
});