// ======================================================
// FILE: js/mail.js
// ======================================================

// Get form reference
const contactForm = document.getElementById("contact-form");

// Prevent null crash
if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page reload
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const subject = document.getElementById("subject").value.trim();

        const message = document.getElementById("message").value.trim();

        // Build professional email body
        const emailBody =
`Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

        // Open default mail app
        window.location.href =
`mailto:dev.iharsh1008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    });

}
