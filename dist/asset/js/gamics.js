// Navbar
const navbar = document.querySelector("[data-navbar]");
const navbar_links = document.querySelectorAll("[data-nav-link]");
const navbar_toggler = document.querySelector("[data-nav-toggler]");
navbar_toggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});
for (let i = 0; i < navbar_links.length; i++) {
  navbar_links[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbar_toggler.classList.remove("active");
  });
}

// Search Toggle
const search_togglers = document.querySelectorAll("[data-search-toggler]");
const search_box = document.querySelector("[data-search-box]");
for (let i = 0; i < search_togglers.length; i++) {
  search_togglers[i].addEventListener("click", function () {
    search_box.classList.toggle("active");
  });
}

// Header
const header = document.querySelector("[data-header]");
const back_top_btn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    back_top_btn.classList.add("active");
  } else {
    header.classList.remove("active");
    back_top_btn.classList.remove("active");
  }
});