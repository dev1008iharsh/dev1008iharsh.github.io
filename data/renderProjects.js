// =========================================================
// FILE: js/renderProjects.js
// Reusable Dynamic Projects Renderer
// Supports:
// - projects.html?type=live
// - projects.html?type=portfolio
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // URL PARAMS
    // =====================================================

    const params =
        new URLSearchParams(window.location.search);

    const type =
        params.get("type");

    // =====================================================
    // ELEMENTS
    // =====================================================

    const container =
        document.getElementById("projectsContainer");

    const heroTitle =
        document.getElementById("heroTitle");

    const heroDescription =
        document.getElementById("heroDescription");

    const heroBadge =
        document.getElementById("heroBadge");

    // Safety check
    if (
        !container ||
        !heroTitle ||
        !heroDescription ||
        !heroBadge
    ) {
        return;
    }

    // =====================================================
    // DATA SOURCE
    // =====================================================

    let projects = [];

    // =====================================================
    // LIVE PROJECTS
    // =====================================================

    if (type === "live") {

        heroBadge.innerHTML =
            "🚀 Production Grade App Store Applications";

        heroTitle.innerHTML =
            'Live <span>Projects</span>';

        heroDescription.innerHTML =
            `
            Production-grade App Store applications built using
            Swift, UIKit + SwiftUI, Firebase,
            AI integrations, realtime systems
            and scalable architectures.
            `;

        projects = liveProjects;
    }

    // =====================================================
    // PORTFOLIO PROJECTS
    // =====================================================

    else {

        heroBadge.innerHTML =
            "🚀 Advanced GitHub Portfolio";

        heroTitle.innerHTML =
            'Portfolio <span>Projects</span>';

        heroDescription.innerHTML =
            `
            Advanced GitHub portfolio projects built using Swift,
            UIKit + SwiftUI, MVVM, Firebase,
            realtime systems and scalable iOS architectures.
            `;

        projects = portfolioProjects;
    }

    // =====================================================
    // RENDER PROJECTS
    // =====================================================

    renderProjects(projects);

});

// =========================================================
// RENDER FUNCTION
// =========================================================

function renderProjects(projects) {

    const container =
        document.getElementById("projectsContainer");

    if (!container) return;

    container.innerHTML = "";

    projects.forEach((project) => {

        const card =
        `
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
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <div class="project-tags">

                ${project.tags.map(tag =>
                    `<span>${tag}</span>`
                ).join("")}

            </div>

            <div class="project-buttons">

                <button
                    class="project-btn"
                    onclick="openModal('${project.image}')"
                >
                    Preview
                </button>

                <a
                    class="project-btn"
                    href="${project.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Experience
                </a>

            </div>

        </div>
        `;

        container.innerHTML += card;
    });

}
