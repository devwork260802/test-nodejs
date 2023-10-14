// Event Adder
const add_event_on_element = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } 
    else {
        elem.addEventListener(type, callback);
    }
}

// Navbar Toogle 
const navbar = document.querySelector("[data-navbar]");
const nav_toggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggle_navbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}
add_event_on_element(nav_toggler, "click", toggle_navbar);

// Header and Back Top Button
const header = document.querySelector("[data-header]");
const back_top_btn = document.querySelector("[data-back-top-btn]");
const active_element_on_scroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        back_top_btn.classList.add("active");
    } 
    else {
        header.classList.remove("active");
        back_top_btn.classList.remove("active");
    }
}
add_event_on_element(window, "scroll", active_element_on_scroll);

// Popular Posts
const filter_btn = document.querySelectorAll("[data-filter-btn]");
const filter_Item = document.querySelectorAll("[data-filter]");
let last_clicked_btn = filter_btn[0];
const filter = function () {
    last_clicked_btn.classList.remove("active");
    this.classList.add("active");
    last_clicked_btn = this;
    for (let i = 0; i < filter_Item.length; i++) {
        if (filter_Item[i].dataset.filter === this.dataset.filter_btn) {
            filter_Item[i].style.display = "block";
        } else {
            filter_Item[i].style.display = "none";
        }
    }
}
add_event_on_element(filter_btn, "click", filter);