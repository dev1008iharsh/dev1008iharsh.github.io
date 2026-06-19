function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");
    const mobilePanel = document.getElementById("mobileNavPanel");

    if (!menuToggle || !navbar || !mobilePanel) return;
    if (menuToggle.dataset.bound === "true") return;

    menuToggle.dataset.bound = "true";

    const setMenuOpen = (isOpen) => {
        navbar.classList.toggle("menu-open", isOpen);
        document.body.classList.toggle("mobile-menu-open", isOpen);
        menuToggle.innerHTML = isOpen ? "✕" : "☰";
        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    };

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        setMenuOpen(!navbar.classList.contains("menu-open"));
    });

    mobilePanel.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            const currentPage =
                window.location.pathname.split("/").pop() || "index.html";

            const targetUrl = new URL(
                link.href,
                window.location.origin
            );

            const targetPage =
                targetUrl.pathname.split("/").pop() || "index.html";

            const hash = targetUrl.hash;

            setMenuOpen(false);

            // Only intercept SAME PAGE hash navigation
            if (
                hash &&
                currentPage === targetPage &&
                typeof window.scrollToHashWithRetry === "function"
            ) {
                event.preventDefault();

                window.scrollToHashWithRetry(hash);
            }
        });

    });
}
