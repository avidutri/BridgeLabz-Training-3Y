(() => {
    const themeButtons = document.querySelectorAll("[data-theme-choice]");
    const currentTheme = document.querySelector("#current-theme");
    const allowedThemes = new Set(["light", "dark", "blue"]);

    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const theme = button.dataset.themeChoice;

            if (!allowedThemes.has(theme)) {
                return;
            }

            document.body.setAttribute("class", `theme-${theme}`);
            document.body.setAttribute("data-theme", theme);
            currentTheme.textContent = theme;
        });
    });
})();
