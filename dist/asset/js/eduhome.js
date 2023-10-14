const toggle_element = function (elem) { elem.classList.toggle("active"); }

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const nav_togglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
for (let i = 0; i < nav_togglers.length; i++) {
  nav_togglers[i].addEventListener("click", function () {
    toggle_element(navbar);
    toggle_element(overlay);
  });
}

// Header and Back to Top
const header = document.querySelector("[data-header]");
const back_top_btn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    back_top_btn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    back_top_btn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});

// Search Box Toggle
const search_togglers = document.querySelectorAll("[data-search-toggler]");
const search_box = document.querySelector("[data-search-box]");
for (let i = 0; i < search_togglers.length; i++) {
  search_togglers[i].addEventListener("click", function () {
    toggle_element(search_box);
  });
}

// Wishlist Button Toggle
const wishlist_btns = document.querySelectorAll("[data-whish-btn]");
for (let i = 0; i < wishlist_btns.length; i++) {
  wishlist_btns[i].addEventListener("click", function () {
    toggle_element(this);
  });
}