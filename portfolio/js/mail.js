/* =========================================================
   FILE: js/mail.js
   Contact Form Mail Handler
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeContactForm();

});

/* =========================================================
   Initialize Contact Form
========================================================= */

function initializeContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", handleMailSubmit);

}

/* =========================================================
   Handle Form Submit
========================================================= */

function handleMailSubmit(event) {

    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const subject = document.getElementById("subject")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    /* ========================================
       Basic Validation
    ======================================== */

    if (!name || !email || !subject || !message) {

        alert("Please fill all required fields.");

        return;

    }

    /* ========================================
       Construct Email Body
    ======================================== */

    const mailSubject = encodeURIComponent(
        `Portfolio Contact • ${subject}`
    );

    const mailBody = encodeURIComponent(

`Hello Harsh,

You received a new portfolio inquiry.

━━━━━━━━━━━━━━━━━━━━━━

Name:
${name}

Email:
${email}

Subject:
${subject}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━

Sent From:
Harsh Darji Portfolio Website
`
    );

    /* ========================================
       Open Default Mail App
    ======================================== */

    const mailToLink =
        `mailto:dev.iharsh1008@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    window.location.href = mailToLink;

    /* ========================================
       Reset Form
    ======================================== */

    setTimeout(() => {

        document.getElementById("contactForm").reset();

    }, 500);

}
