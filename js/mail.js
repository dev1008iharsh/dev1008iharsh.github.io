// ========================================
// Contact Form Handler
// ========================================

window.addEventListener("DOMContentLoaded", () => {

    // Wait because components load dynamically
    setTimeout(() => {

        // Get contact form
        const contactForm = document.querySelector("#contact-form");

        // Safety check
        if (!contactForm) {

            console.error("❌ contact-form not found");

            return;
        }

        // Handle form submit
        contactForm.addEventListener("submit", (event) => {

            // Prevent page refresh
            event.preventDefault();

            // Get input values safely
            const name =
                document.querySelector("#name")?.value.trim();

            const email =
                document.querySelector("#email")?.value.trim();

            const subject =
                document.querySelector("#subject")?.value.trim();

            const message =
                document.querySelector("#message")?.value.trim();

            // Create email body
            const body = `
Name: ${name}

Email: ${email}

Message:
${message}
            `;

            // Create mailto URL
            const mailToURL =
                `mailto:dev.iharsh1008@gmail.com` +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;

            // Open default system mail app
            window.location.href = mailToURL;

            // Reset form after opening mail
            contactForm.reset();

        });

        console.log("✅ Contact form initialized");

    }, 500);

});
