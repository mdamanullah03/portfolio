const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBar.classList.toggle("fa-bars");
    menuBar.classList.toggle("fa-xmark");

});