function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    return true;
}

var menu = document.getElementById("menu");
var button = document.getElementById("menu-button");

button.addEventListener("click", function(){
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

var currentSlide = 0;
var slides = document.getElementsByClassName("slide");

function nextSlide() {
    slides[currentSlide].classList.remove("visible");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("visible");
}

setInterval(nextSlide, 3000); // 3 seconds
