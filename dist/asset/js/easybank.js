const navbar_toggle_button = document.querySelector('.navbar-toggle-btn');
const navbar_nav = document.querySelector('.navbar-nav');
const navbar_toggle_function = () => {
  navbar_toggle_button.classList.toggle('active');
  navbar_nav.classList.toggle('active');
}
navbar_toggle_button.addEventListener('click', navbar_toggle_function);