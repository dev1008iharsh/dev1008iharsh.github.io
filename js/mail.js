window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const form = document.querySelector("#contact-form");
        if (!form) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.querySelector("#name")?.value.trim();
            const email = document.querySelector("#email")?.value.trim();
            const subject = document.querySelector("#subject")?.value.trim();
            const message = document.querySelector("#message")?.value.trim();

            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailToURL =
                `mailto:dev.iharsh1008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailToURL;
            form.reset();
        });
    }, 500);
});
