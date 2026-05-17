/* =========================================================
   FILE: js/modal.js
   Premium Futuristic Modal Viewer
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeModal();

});

/* =========================================================
   Initialize Modal
========================================================= */

function initializeModal() {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    if (!modal || !modalImage) return;

    /* ========================================
       Global Open Function
    ======================================== */

    window.openModal = function(imagePath, title = "") {

        modal.classList.add("active");

        modalImage.src = imagePath;
        modalImage.alt = title;

        document.body.style.overflow = "hidden";

    };

    /* ========================================
       Global Close Function
    ======================================== */

    window.closeModal = function() {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

        setTimeout(() => {

            modalImage.src = "";

        }, 300);

    };

    /* ========================================
       Close Modal On Background Click
    ======================================== */

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });

    /* ========================================
       Close On ESC Key
    ======================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });

}

/* =========================================================
   Auto Attach Preview Buttons
========================================================= */

document.addEventListener("click", (event) => {

    const previewButton = event.target.closest("[data-preview]");

    if (!previewButton) return;

    const image = previewButton.dataset.preview;
    const title = previewButton.dataset.title || "Project Preview";

    openModal(image, title);

});
