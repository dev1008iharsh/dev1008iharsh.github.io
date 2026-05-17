// ========================================
// Contact Form Handler
// ========================================

window.addEventListener("load", () => {

    // Get contact form AFTER components load
    const contactForm = document.querySelector("#contact-form");

    // Safety check
    if (!contactForm) {

        console.error("❌ contact-form not found");

        return;
    }

    // Form Submit
    contactForm.addEventListener("submit", (event) => {

        // Prevent page refresh
        event.preventDefault();

        // Get values
        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const subject = document.querySelector("#subject").value.trim();

        const message = document.querySelector("#message").value.trim();

        // Debug
        console.log({
            name,
            email,
            subject,
            message
        });

        // Success Message
        alert("Message sent successfully 🚀");

        // Reset Form
        contactForm.reset();

    });

});
