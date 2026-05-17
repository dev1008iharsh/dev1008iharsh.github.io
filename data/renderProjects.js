// =========================================================
// FILE: js/renderProjects.js
// Dynamic Projects Renderer
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // URL Params

    const params =
        new URLSearchParams(window.location.search);

    const type =
        params.get("type");

    // Elements

    const container =
        document.getElementById("projectsContainer");

    const heroTitle =
        document.getElementById("heroTitle");

    const heroDescription =
        document.getElementById("heroDescription");

    const heroBadge =
        document.getElementById("heroBadge");

    // Safety

    if (
        !container ||
        !heroTitle ||
        !heroDescription ||
        !heroBadge
    ) {
        return;
    }

    // Data

    let projects = [];

    // Live Projects

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
            built using Swift,
            UIKit + SwiftUI,
            Firebase,
            AI integrations,
            realtime systems
            and scalable architectures.
            `;

        projects = liveProjects;
    }

    // Portfolio Projects

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
            built using Swift,
            UIKit + SwiftUI,
            MVVM,
            Firebase,
            realtime systems
            and scalable iOS architectures.
            `;

        projects = portfolioProjects;
    }

    // Render

    renderProjects(projects);

});

// =========================================================
// Render Cards
// =========================================================

function renderProjects(projects) {

    const container =
        document.getElementById("projectsContainer");

    if (!container) return;

    // Reset

    container.innerHTML = "";

    // Create HTML

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

    }).join("");

    // Inject Once
    // Better performance than += loop

    container.innerHTML = cardsHTML;

}
