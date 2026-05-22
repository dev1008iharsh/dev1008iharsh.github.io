document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const container = document.getElementById("projectsContainer");
    const heroTitle = document.getElementById("heroTitle");
    const heroDescription = document.getElementById("heroDescription");
    const heroBadge = document.getElementById("heroBadge");

    if (!container || !heroTitle || !heroDescription || !heroBadge) return;

    let projects = [];

    if (type === "live") {
        document.title = "Live Projects • Harsh Darji";
        heroBadge.textContent = "🚀 App Store Apps • Led & Built by Harsh";
        heroTitle.innerHTML = "Live <span>Projects</span>";
        heroDescription.textContent =
            "App Store apps across camera, health, fintech, logistics, streaming and marketplaces with real-time systems and production-grade architecture.";
        projects = typeof liveProjects !== "undefined" ? liveProjects : [];
    } else {
        document.title = "Portfolio Apps • Harsh Darji";
        heroBadge.textContent = "💻 GitHub Portfolio Apps • Architecture & Leadership";
        heroTitle.innerHTML = "Portfolio <span>Apps</span>";
        heroDescription.textContent =
            "GitHub portfolio apps covering MVVM, Firebase scale, AI chat, payments, offline-first data and reusable iOS frameworks.";
        projects = typeof portfolioProjects !== "undefined" ? portfolioProjects : [];
    }

    renderProjects(projects);
});

function renderProjects(projects) {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    if (!Array.isArray(projects)) {
        container.innerHTML = "<p>Failed to load projects.</p>";
        return;
    }

    const frameworkTags = ["SwiftUI", "UIKit"];

    container.innerHTML = projects.map((project) => {
        const tags = (project.tags || []).map((tag) => {
            const cls = frameworkTags.includes(tag) ? "tag-framework" : "tag-skill";
            return `<span class="${cls}">${tag}</span>`;
        }).join("");

        const highlights = (project.highlights || []).map((item) => `<li>${item}</li>`).join("");
        const highlightsHTML = highlights
            ? `<ul class="project-highlights">${highlights}</ul>`
            : "";

        const badge = project.flagship
            ? `<div class="project-top"><span class="project-badge">Flagship</span></div>`
            : "";

        return `
        <div class="project-card fade-in">
            ${badge}
            <h3>${project.title || "Untitled Project"}</h3>
            <p>${project.description || ""}</p>
            ${highlightsHTML}
            <div class="project-tags">${tags}</div>
            <div class="project-buttons">
                <button class="project-btn" data-preview="${project.image || ""}" data-title="${project.title || ""}">Preview</button>
                <a class="project-btn" href="${project.link || "#"}" target="_blank" rel="noopener noreferrer">Experience</a>
            </div>
        </div>`;
    }).join("");
}
