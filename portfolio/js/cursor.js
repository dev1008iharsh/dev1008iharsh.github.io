/* =========================================================
   FILE: js/cursor.js
   Futuristic Cursor Follow Effect
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createCustomCursor();
    initializeCursorEffects();

});

/* =========================================================
   Create Cursor Elements
========================================================= */

function createCustomCursor() {

    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");

    const cursorOutline = document.createElement("div");
    cursorOutline.classList.add("cursor-outline");

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

}

/* =========================================================
   Cursor Movement Logic
========================================================= */

function initializeCursorEffects() {

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;

    /* ========================================
       Track Mouse Position
    ======================================== */

    window.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;

    });

    /* ========================================
       Smooth Cursor Animation
    ======================================== */

    function animateOutline() {

        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateOutline);

    }

    animateOutline();

    /* ========================================
       Hover Effects
    ======================================== */

    const hoverTargets = document.querySelectorAll(`
        a,
        button,
        .project-card,
        .skill-box,
        .stat-card,
        .timeline-content,
        .project-btn,
        .resume-btn
    `);

    hoverTargets.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursorDot.classList.add("cursor-hover");
            cursorOutline.classList.add("cursor-outline-hover");

        });

        element.addEventListener("mouseleave", () => {

            cursorDot.classList.remove("cursor-hover");
            cursorOutline.classList.remove("cursor-outline-hover");

        });

    });

    /* ========================================
       Hide Cursor When Leaving Window
    ======================================== */

    document.addEventListener("mouseleave", () => {

        cursorDot.style.opacity = "0";
        cursorOutline.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursorDot.style.opacity = "1";
        cursorOutline.style.opacity = "1";

    });

}
