document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("projects-page")) return;

    let dot = document.querySelector(".cursor-dot");
    let outline = document.querySelector(".cursor-outline");

    if (!dot) {
        dot = document.createElement("div");
        dot.className = "cursor-dot";
        document.body.appendChild(dot);
    }

    if (!outline) {
        outline = document.createElement("div");
        outline.className = "cursor-outline";
        document.body.appendChild(outline);
    }

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;
        requestAnimationFrame(animateOutline);
    }

    animateOutline();

    document.querySelectorAll("a, button, .project-card, .expertise-card, .stat-card").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            dot.classList.add("cursor-hover");
            outline.classList.add("cursor-outline-hover");
        });
        el.addEventListener("mouseleave", () => {
            dot.classList.remove("cursor-hover");
            outline.classList.remove("cursor-outline-hover");
        });
    });
});
