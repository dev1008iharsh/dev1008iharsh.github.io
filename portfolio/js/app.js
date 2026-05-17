/* =========================================================
   FILE: js/app.js
   Main Application Logic
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeSpotlightEffect();
    initializeNavbarScroll();
    initializeSmoothScrolling();
    initializeActiveNavLinks();

});

/* =========================================================
   Mouse Spotlight Hover Effect
========================================================= */

function initializeSpotlightEffect() {

    const interactiveCards = document.querySelectorAll(`
        .project-card,
        .stat-card,
        .skill-box,
        .about-card,
        .timeline-content,
        .contact-card
    `);

    window.addEventListener("mousemove", (event) => {

        interactiveCards.forEach((card) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);

        });

    });

}

/* =========================================================
   Navbar Background On Scroll
========================================================= */

function initializeNavbarScroll() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });

}

/* =========================================================
   Smooth Scroll Navigation
========================================================= */

function initializeSmoothScrolling() {

    const navLinks = document.querySelectorAll(`
        a[href^="#"]
    `);

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            event.preventDefault();

            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: "smooth"
            });

        });

    });

}

/* =========================================================
   Active Navigation Highlight
========================================================= */

function initializeActiveNavLinks() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active-link");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active-link");
            }

        });

    });

}
