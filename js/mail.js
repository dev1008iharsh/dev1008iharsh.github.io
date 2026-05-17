// ========================================
// Contact Form Script
// ========================================

// Wait until full HTML is loaded
window.addEventListener("DOMContentLoaded", () => {

    // Get form element safely
    const contactForm = document.getElementById("contact-form");

    // Prevent crash if form does not exist
    if (!contactForm) {

        console.error("❌ contact-form not found");

        return;
    }

    // Form submit listener
    contactForm.addEventListener("submit", (event) => {

        // Prevent page refresh & URL params
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name")?.value.trim();

        const email = document.getElementById("email")?.value.trim();

        const subject = document.getElementById("subject")?.value.trim();

        const message = document.getElementById("message")?.value.trim();

        // Validation
        if (!name || !email || !subject || !message) {

            alert("Please fill all fields.");

            return;
        }

        // Debug
        console.log({
            name,
            email,
            subject,
            message
        });

        // Success Message
        alert("Message sent successfully 🚀");

        // Reset form
        contactForm.reset();

    });

});
