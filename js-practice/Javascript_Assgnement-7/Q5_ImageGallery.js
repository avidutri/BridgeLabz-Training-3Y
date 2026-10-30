(() => {
    const gallery = document.querySelector("#image-gallery");
    const modal = document.querySelector("#image-modal");
    const modalContent = modal.querySelector(".modal-content");
    const modalImage = document.querySelector("#modal-image");
    const closeButton = document.querySelector("#modal-close");

    function closeModal() {
        modal.hidden = true;
        modalImage.removeAttribute("src");
        modalImage.alt = "";
    }

    gallery.addEventListener("click", event => {
        const thumbnail = event.target.closest(".gallery-image");

        if (!thumbnail) {
            return;
        }

        const image = thumbnail.querySelector("img");
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        modal.hidden = false;
        closeButton.focus();
    });

    modal.addEventListener("click", closeModal);
    modalContent.addEventListener("click", event => {
        event.stopPropagation();
    });
    closeButton.addEventListener("click", closeModal);
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !modal.hidden) {
            closeModal();
        }
    });
})();
