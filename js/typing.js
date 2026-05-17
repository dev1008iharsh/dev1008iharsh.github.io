/* =========================================================
   FILE: js/typing.js
   Hero Typing Animation
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTypingAnimation();

});

/* =========================================================
   Typing Animation
========================================================= */

function initializeTypingAnimation() {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const texts = [

        "Project Lead • Senior iOS Engineer 🚀",

        "Swift • UIKit + SwiftUI • MVVM",

        "Scalable Architecture • Performance Optimization",

        "Realtime Systems • Firebase • AI Apps",

        "Production-Grade iOS Applications"

    ];

    let textIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    const typingSpeed = 70;
    const deletingSpeed = 40;
    const pauseDuration = 1800;

    function type() {

        const currentText = texts[textIndex];

        if (isDeleting) {

            typingElement.textContent =
                currentText.substring(0, characterIndex--);

        } else {

            typingElement.textContent =
                currentText.substring(0, characterIndex++);

        }

        let timeout = isDeleting
            ? deletingSpeed
            : typingSpeed;

        if (!isDeleting && characterIndex === currentText.length) {

            timeout = pauseDuration;
            isDeleting = true;

        } else if (isDeleting && characterIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }

            timeout = 400;

        }

        setTimeout(type, timeout);

    }

    type();

}

/* =========================================================
   Blinking Cursor
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const cursor = document.createElement("span");

    cursor.classList.add("typing-cursor");
    cursor.innerHTML = "|";

    typingElement.after(cursor);

});
