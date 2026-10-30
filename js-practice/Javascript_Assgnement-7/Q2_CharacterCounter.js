(() => {
    const maximumCharacters = 100;
    const textArea = document.querySelector("#character-input");
    const counter = document.querySelector("#character-counter");
    const resetButton = document.querySelector("#character-reset");

    function updateCounter() {
        const remaining = maximumCharacters - textArea.value.length;
        counter.textContent = `${remaining} character${remaining === 1 ? "" : "s"} remaining`;
        counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
        counter.classList.toggle("limit-reached", remaining === 0);
    }

    textArea.setAttribute("maxlength", String(maximumCharacters));

    textArea.addEventListener("beforeinput", event => {
        if (!event.inputType.startsWith("insert") || event.data === null) {
            return;
        }

        const selectionLength = textArea.selectionEnd - textArea.selectionStart;
        const nextLength = textArea.value.length - selectionLength + event.data.length;

        if (nextLength > maximumCharacters) {
            event.preventDefault();
        }
    });

    textArea.addEventListener("input", updateCounter);
    resetButton.addEventListener("click", () => {
        textArea.value = "";
        updateCounter();
        textArea.focus();
    });

    updateCounter();
})();
