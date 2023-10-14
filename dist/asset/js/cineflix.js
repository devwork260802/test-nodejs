// Navbar Menu Toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbar_menu_btn = document.querySelector('.navbar-menu-btn');
function nav_is_active() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbar_menu_btn.classList.toggle('active');
}
navbar_menu_btn.addEventListener('click', nav_is_active);

// Navbar Search Toggle
const navbar_form = document.querySelector('.navbar-form');
const navbar_form_close_btn = document.querySelector('.navbar-form-close');
const navbar_search_btn = document.querySelector('.navbar-search-btn');
const search_bar_is_active = () => navbar_form.classList.toggle('active');
navbar_search_btn.addEventListener('click', search_bar_is_active);
navbar_form_close_btn.addEventListener('click', search_bar_is_active);