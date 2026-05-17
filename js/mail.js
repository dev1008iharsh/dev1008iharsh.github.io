// ======================================================
// FILE: js/mail.js
// Professional Contact Form Mail Handler
// ======================================================

window.addEventListener("load", () => {

    /* ==================================================
    Get Contact Form
    ================================================== */

    const contactForm =
        document.getElementById("contact-form");

    /* ==================================================
    Debug Check
    ================================================== */

    console.log(
        "Contact Form:",
        contactForm
    );

    /* ==================================================
    Prevent Null Errors
    ================================================== */

    if (!contactForm) {

        console.error(
            "❌ contact-form not found"
        );

        return;
    }

    /* ==================================================
    Submit Event
    ================================================== */

    contactForm.addEventListener("submit", (event) => {

        /* ==============================================
        Prevent Default Reload
        ============================================== */

        event.preventDefault();

        /* ==============================================
        Get Form Values
        ============================================== */

        const name =
            document
                .getElementById("name")
                ?.value
                .trim();

        const email =
            document
                .getElementById("email")
                ?.value
                .trim();

        const subject =
            document
                .getElementById("subject")
                ?.value
                .trim();

        const message =
            document
                .getElementById("message")
                ?.value
                .trim();

        /* ==============================================
        Validation
        ============================================== */

        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill all fields."
            );

            return;
        }

        /* ==============================================
        Build Email Body
        ============================================== */

        const emailBody =
`Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

        /* ==============================================
        Debug Log
        ============================================== */

        console.log(
            "Opening Mail Client..."
        );

        /* ==============================================
        Open Default Mail App
        ============================================== */

        const mailURL =
`mailto:dev.iharsh1008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailURL;

        /* ==============================================
        Optional Reset Form
        ============================================== */

        contactForm.reset();

    });

});
