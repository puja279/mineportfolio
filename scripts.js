document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            console.log("Smooth scrolling to:", target); 
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Construct mailto URL
        var subject = "Message from " + name;
        var body = "From: " + name + " (" + email + ")\n\nMessage:\n" + message;
        var mailtoUrl = "mailto:your-email@example.com" +
                        "?subject=" + encodeURIComponent(subject) +
                        "&body=" + encodeURIComponent(body);

        // Open default email client with prefilled fields
        window.location.href = mailtoUrl;
    });
});