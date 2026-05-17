// =========================================================
// FILE: js/renderProjects.js
// Dynamic Projects Renderer
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       URL Params
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const type =
        params.get("type");

    /* =====================================================
       DOM Elements
    ===================================================== */

    const container =
        document.getElementById("projectsContainer");

    const heroTitle =
        document.getElementById("heroTitle");

    const heroDescription =
        document.getElementById("heroDescription");

    const heroBadge =
        document.getElementById("heroBadge");

    /* =====================================================
       Safety Check
    ===================================================== */

    if (
        !container ||
        !heroTitle ||
        !heroDescription ||
        !heroBadge
    ) {

        console.error(
            "Projects page elements not found."
        );

        return;
    }

    /* =====================================================
       Projects Data
    ===================================================== */

    let projects = [];

    /* =====================================================
       LIVE PROJECTS
    ===================================================== */

    if (type === "live") {

        document.title =
            "Live Projects • Harsh Darji";

        heroBadge.innerHTML =
            "🚀 Production Grade App Store Applications";

        heroTitle.innerHTML =
            'Live <span>Projects</span>';

        heroDescription.innerHTML =
            `
            Production-grade App Store applications
            built using Swift, UIKit + SwiftUI,
            AI integrations, realtime systems
            and scalable architectures.
            `;

        // Safety fallback
        // Prevent page crash if data file fails

        projects =
            typeof liveProjects !== "undefined"
            ? liveProjects
            : [];

    }

    /* =====================================================
       PORTFOLIO PROJECTS
    ===================================================== */

    else {

        document.title =
            "Portfolio Projects • Harsh Darji";

        heroBadge.innerHTML =
            "🚀 Advanced GitHub Portfolio";

        heroTitle.innerHTML =
            'Portfolio <span>Projects</span>';

        heroDescription.innerHTML =
            `
            Advanced GitHub portfolio projects
            built using Swift, UIKit + SwiftUI,
            MVVM, Firebase and scalable
            iOS architectures.
            `;

        // Safety fallback
        // Prevent page crash if data file fails

        projects =
            typeof portfolioProjects !== "undefined"
            ? portfolioProjects
            : [];

    }

    /* =====================================================
       Debug Logs
    ===================================================== */

    console.log(
        "Projects Type:",
        type
    );

    console.log(
        "Projects Data:",
        projects
    );

    /* =====================================================
       Render Projects
    ===================================================== */

    renderProjects(projects);

});

/* =========================================================
   Render Cards
========================================================= */

function renderProjects(projects) {

    const container =
        document.getElementById("projectsContainer");

    if (!container) {

        console.error(
            "Projects container not found."
        );

        return;
    }

    /* =====================================================
       Empty State
    ===================================================== */

    if (!Array.isArray(projects)) {

        console.error(
            "Projects is not an array:",
            projects
        );

        container.innerHTML =
            `
            <p style="color:white;">
                Failed to load projects.
            </p>
            `;

        return;
    }

    /* =====================================================
       Reset Container
    ===================================================== */

    container.innerHTML = "";

    /* =====================================================
       Generate Cards
    ===================================================== */

    const cardsHTML = projects.map((project) => {

        return `
        <div class="project-card fade-in">

            ${
                project.flagship
                ?
                `
                <div class="project-top">

                    <span class="project-badge">
                        Flagship
                    </span>

                </div>
                `
                :
                ""
            }

            <h3>
                ${project.title || "Untitled Project"}
            </h3>

            <p>
                ${project.description || ""}
            </p>

            <div class="project-tags">

                ${(project.tags || []).map(tag =>
                    `<span>${tag}</span>`
                ).join("")}

            </div>

            <div class="project-buttons">

                <button
                    class="project-btn"
                    data-preview="${project.image || ""}"
                    data-title="${project.title || ""}"
                >
                    Preview
                </button>

                <a
                    class="project-btn"
                    href="${project.link || "#"}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Experience
                </a>

            </div>

        </div>
        `;

    }).join("");

    /* =====================================================
       Inject HTML
    ===================================================== */

    container.innerHTML = cardsHTML;

    console.log(
        "Projects rendered successfully."
    );

}
