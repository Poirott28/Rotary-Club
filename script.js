function showSuccessMessage(event) {
    event.preventDefault(); 
    alert("¡Inscripción realizada con éxito!");
    document.getElementById("registrationForm").reset(); 
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});