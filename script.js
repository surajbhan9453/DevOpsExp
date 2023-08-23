document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the default form submission
        
        // You can perform further actions here, like sending form data to a server
        
        alert("Form submitted successfully!");
    });
});
