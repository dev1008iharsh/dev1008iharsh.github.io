// ========================================
// Contact Form Submission
// ========================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !subject || !message) {

        alert("Please fill all fields.");

        return;
    }

    // Example success flow
    console.log({
        name,
        email,
        subject,
        message
    });

    alert("Message sent successfully 🚀");

    // Reset form
    contactForm.reset();

});
