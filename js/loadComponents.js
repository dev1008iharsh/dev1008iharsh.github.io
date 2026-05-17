/* =========================================
   Load HTML Components
========================================= */

async function loadComponent(
    containerId,
    filePath
) {

    try {

        const response = await fetch(filePath);

        const html = await response.text();

        document.getElementById(containerId).innerHTML = html;

    } catch (error) {

        console.error(
            `Error loading component: ${filePath}`,
            error
        );

    }

}

/* =========================================
   Initialize Components
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        await loadComponent(
            "navbar-container",
            "components/navbar.html"
        );

        await loadComponent(
            "hero-container",
            "components/hero.html"
        );

        await loadComponent(
            "about-container",
            "components/about.html"
        );

        await loadComponent(
            "featured-container",
            "components/featured-work.html"
        );

        await loadComponent(
            "contact-container",
            "components/contact.html"
        );

        await loadComponent(
            "modal-container",
            "components/modal.html"
        );

       await loadComponent(
            "skills-container",
            "components/skills.html"
        );

    }
);
