/* =========================================================
   FILE: js/typing.js
   Premium Hero Typing Animation
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTypingAnimation();

});

/* =========================================================
   Typing Animation
========================================================= */

function initializeTypingAnimation() {

    const typingElement =
        document.getElementById("typing-text");

    /* =========================================
       Safety Check
    ========================================= */

    if (!typingElement) return;

    /* =========================================
       Dynamic Typing Texts
    ========================================= */

    const texts = [

        "AI-Driven Mobile Application Development Experiences",

        "Senior iOS Engineer 🚀",

        "Swift • UIKit • SwiftUI",

        "Realtime Systems • Firebase",

        "Scalable Architecture Specialist",

        "Performance Optimization Expert",

        "Production-Grade App Builder"

    ];

    let textIndex = 0;

    let characterIndex = 0;

    let isDeleting = false;

    const typingSpeed = 75;

    const deletingSpeed = 40;

    const pauseDuration = 1800;

    /* =========================================
       Main Typing Function
    ========================================= */

    function type() {

        const currentText =
            texts[textIndex];

        /* =====================================
           Typing
        ===================================== */

        if (!isDeleting) {

            typingElement.innerHTML =
                currentText.substring(
                    0,
                    characterIndex + 1
                ) +
                '<span class="typing-cursor">|</span>';

            characterIndex++;
        }

        /* =====================================
           Deleting
        ===================================== */

        else {

            typingElement.innerHTML =
                currentText.substring(
                    0,
                    characterIndex - 1
                ) +
                '<span class="typing-cursor">|</span>';

            characterIndex--;
        }

        let timeout =
            isDeleting
            ? deletingSpeed
            : typingSpeed;

        /* =====================================
           Text Fully Typed
        ===================================== */

        if (
            !isDeleting &&
            characterIndex === currentText.length
        ) {

            timeout = pauseDuration;

            isDeleting = true;
        }

        /* =====================================
           Text Fully Deleted
        ===================================== */

        else if (
            isDeleting &&
            characterIndex === 0
        ) {

            isDeleting = false;

            textIndex++;

            if (
                textIndex >= texts.length
            ) {

                textIndex = 0;
            }

            timeout = 500;
        }

        setTimeout(type, timeout);
    }

    /* =========================================
       Start Animation
    ========================================= */

    type();

}
