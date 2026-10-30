(() => {
    const form = document.querySelector("#validation-form");
    const fields = [...form.querySelectorAll("input")];
    const successMessage = document.querySelector("#form-success");
    let submitted = false;

    function getError(input) {
        const value = input.value.trim();

        if (!value) {
            return "This field is required.";
        }

        if (input.name === "email" && !value.includes("@")) {
            return "Email must contain @.";
        }

        if (input.name === "password" && value.length < 6) {
            return "Password must be at least 6 characters.";
        }

        return "";
    }

    function validateField(input) {
        const error = getError(input);
        const errorMessage = form.querySelector(`[data-validation-error="${input.id}"]`);
        errorMessage.textContent = error;
        input.setAttribute("aria-invalid", String(Boolean(error)));
        return !error;
    }

    fields.forEach(input => {
        input.addEventListener("input", () => {
            if (submitted) {
                validateField(input);
                successMessage.hidden = true;
            } else {
                const errorMessage = form.querySelector(`[data-validation-error="${input.id}"]`);
                if (errorMessage.textContent) {
                    validateField(input);
                }
            }
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        submitted = true;

        const valid = fields.map(validateField).every(Boolean);
        successMessage.hidden = !valid;

        if (!valid) {
            form.querySelector('[aria-invalid="true"]').focus();
        }
    });
})();
