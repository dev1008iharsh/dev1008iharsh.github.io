async function loadComponent(containerId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Failed to load ${filePath}`, error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar-container", "components/navbar.html");
    if (typeof initMobileMenu === "function") initMobileMenu();

    await loadComponent("hero-container", "components/hero.html");
    if (typeof initializeTypingAnimation === "function") initializeTypingAnimation();

    await loadComponent("about-container", "components/about.html");
    await loadComponent("featured-container", "components/featured-work.html");
    await loadComponent("skills-container", "components/skills.html");
    await loadComponent("contact-container", "components/contact.html");
    await loadComponent("modal-container", "components/modal.html");

    if (typeof initializePageFeatures === "function") {
        initializePageFeatures();
    }

    if (window.location.hash) {

        if (typeof scrollToHashWithRetry === "function") {

            scrollToHashWithRetry(window.location.hash);

        } else {

            setTimeout(() => {
                const target = document.querySelector(window.location.hash);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 300);

        }
    }
});
