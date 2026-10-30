(() => {
    const dropdown = document.querySelector("#custom-dropdown");
    const toggleButton = document.querySelector("#dropdown-toggle");
    const optionsList = document.querySelector("#dropdown-options");

    function closeDropdown() {
        optionsList.hidden = true;
        toggleButton.setAttribute("aria-expanded", "false");
    }

    // Capture outside clicks before they reach other page handlers.
    document.addEventListener("click", event => {
        if (!dropdown.contains(event.target)) {
            closeDropdown();
        }
    }, true);

    toggleButton.addEventListener("click", () => {
        const isOpening = optionsList.hidden;
        optionsList.hidden = !isOpening;
        toggleButton.setAttribute("aria-expanded", String(isOpening));
    });

    optionsList.addEventListener("click", event => {
        const option = event.target.closest("button[data-option]");

        if (!option) {
            return;
        }

        toggleButton.textContent = option.dataset.option;
        closeDropdown();
        toggleButton.focus();
    });
})();
