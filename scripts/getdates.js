document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Modified: " + lastModified;
});