const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBar.classList.toggle("fa-bars");
    menuBar.classList.toggle("fa-xmark");

});

// Contact Form - EmailJS
 let contactform = document.getElementById("contact-form")
 contactform.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_vcdv1dg",
        "template_y4trmpi",
        this
    )

    .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Message failed to send. Please try again.");
    });
});