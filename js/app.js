document.addEventListener("DOMContentLoaded", () => {
    initializeSpotlightEffect();
});

function initializeSpotlightEffect() {
    const cards = document.querySelectorAll(
        ".project-card, .stat-card, .about-card, .expertise-card, .contact-card, .feature-card"
    );

    if (!cards.length) return;

    window.addEventListener("mousemove", (event) => {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${event.clientX - rect.left}px`);
            card.style.setProperty("--y", `${event.clientY - rect.top}px`);
        });
    });
}

function initializeNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("navbar-scrolled", window.scrollY > 40);
    });
}

function scrollToHashTarget(hash) {
    if (!hash || hash === "#") return false;
    const target = document.querySelector(hash);
    if (!target) return false;

    window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
    });
    return true;
}

function scrollToHashWithRetry(hash, attemptsLeft = 40) {
    if (scrollToHashTarget(hash)) return;
    if (attemptsLeft <= 0) return;
    setTimeout(() => scrollToHashWithRetry(hash, attemptsLeft - 1), 50);
}

function isSamePageNavLink(url) {
    return (
        url.pathname === window.location.pathname ||
        (
            (url.pathname.endsWith("index.html") || url.pathname.endsWith("/")) &&
            (window.location.pathname.endsWith("index.html") ||
                window.location.pathname.endsWith("/") ||
                window.location.pathname === "")
        )
    );
}

function initializeSmoothScrolling() {
    if (document.body.dataset.navScrollBound === "true") return;
    document.body.dataset.navScrollBound = "true";

    document.addEventListener("click", (event) => {
        const link = event.target.closest('.navbar a[href*="#"]');
        if (!link) return;

        const url = new URL(link.href, window.location.href);
        const hash = url.hash;
        if (!hash || hash === "#" || !isSamePageNavLink(url)) return;

        event.preventDefault();
        scrollToHashWithRetry(hash);
    });
}

window.scrollToHashWithRetry = scrollToHashWithRetry;

function initializeActiveNavLinks() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const top = section.offsetTop - 180;
            if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute("href") || "";
            link.classList.toggle(
                "active-link",
                href === `#${currentSection}` || href.endsWith(`#${currentSection}`)
            );
        });
    });
}

function initializePageFeatures() {
    initializeNavbarScroll();
    initializeSmoothScrolling();
    initializeActiveNavLinks();
    initializeSpotlightEffect();
}
