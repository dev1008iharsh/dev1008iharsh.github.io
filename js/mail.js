// ========================================
// Contact Form
// ========================================

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
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

    // Success Alert
    alert("Message sent successfully 🚀");

    // Reset Form
    contactForm.reset();

});
