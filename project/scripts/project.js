document.addEventListener("DOMContentLoaded", function() {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");
    const messageForm = document.querySelector("#messageForm");
    const messageInput = document.querySelector("#messageInput");
    const savedMessagesElement = document.querySelector("#savedMessages");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

    loadMessages();

    function saveMessage(message) {
        const messages = JSON.parse(localStorage.getItem("messages")) || []; 
        messages.push({ text: message, timestamp: new Date().toLocaleString() }); 
        localStorage.setItem("messages", JSON.stringify(messages)); 
    }

    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("messages")) || []; 
        if (messages.length > 0) {
            const messagesHTML = messages.map(msg => `<li>${msg.text} <small>(${msg.timestamp})</small></li>`).join("");
            savedMessagesElement.innerHTML = `<ul>${messagesHTML}</ul>`; 
        } else {
            savedMessagesElement.textContent = "No messages saved.";
        }
    }

    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            saveMessage(message);
            loadMessages(); 
            messageInput.value = ""; 
        } else {
            alert("Please enter a message before submitting.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach(img => {
        img.src = img.dataset.src; // Load the image when it comes into view
    });
});