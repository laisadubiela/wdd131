document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Modified: " + lastModified;
});

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector("button");
    const navigation = document.querySelector("nav");
    const navLinks = document.querySelectorAll("a");


    menuButton.addEventListener("click", function() {
        navigation.classList.toggle("open");
        menuButton.textContent = menuButton.textContent === "☰" ? "✖" : "☰";
        navigation.style.display = navigation.style.display === "flex" ? "none" : "flex";
        navLinks.forEach(link => {
            link.style.fontSize = "20px";
        });
    });
});