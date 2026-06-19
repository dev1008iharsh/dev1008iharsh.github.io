/* =========================================================
   FILE: js/typing.js
   Premium Hero Typing Animation
========================================================= */

/* Initialized after hero loads in loadComponents.js */

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

    "Project Lead • Senior Mobile App Developer",

    "Leading Teams • Building & Shipping Production-Ready Apps",

    "Complete Mobile Solutions • From Idea to App Store Release",

    "Native iOS Development • Swift • UIKit • SwiftUI",

    "Cross-Platform Development • Flutter • Dart • React Native",

    "Backend Integration • REST APIs • GraphQL • WebSockets",

    "Firebase • Supabase • Authentication • Real-Time Systems",

    "Scalable Architecture • MVVM • Clean Architecture • Modular Design",

    "Performance Optimization • Memory Management • App Security",

    "CI/CD • Fastlane • Automated Testing • Release Management",

    "Code Reviews • Mentoring Developers • Technical Leadership",

    "AI-Powered Applications • LLM Integration • OpenAI APIs",

    "Agentic Development • Claude • ChatGPT • AI-Assisted Engineering",

    "Automation Workflows • AI Agents • Productivity Systems",

    "Product Strategy • User Experience • Business-Focused Development",

    "Building Reliable • Scalable • High-Performance Mobile Products"

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
