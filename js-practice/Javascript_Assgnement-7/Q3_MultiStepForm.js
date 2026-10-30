(() => {
    const form = document.querySelector("#multi-step-form");
    const steps = [...form.querySelectorAll(".form-step")];
    const backButton = document.querySelector("#step-back");
    const nextButton = document.querySelector("#step-next");
    const summary = document.querySelector("#step-summary");
    let currentStep = 0;

    function showStep(index) {
        currentStep = index;
        steps.forEach((step, stepIndex) => {
            step.hidden = stepIndex !== currentStep;
        });
        backButton.hidden = currentStep === 0;
        nextButton.textContent = currentStep === steps.length - 1 ? "Show summary" : "Next";
        steps[currentStep].querySelector("input").focus();
    }

    function validateCurrentStep() {
        const input = steps[currentStep].querySelector("input");
        const errorMessage = form.querySelector(`[data-error-for="${input.id}"]`);
        let error = "";

        if (!input.value.trim()) {
            error = "This field is required.";
        } else if (input.type === "email" && !input.validity.valid) {
            error = "Enter a valid email address.";
        } else if (input.type === "password" && input.value.length < 6) {
            error = "Password must be at least 6 characters.";
        }

        errorMessage.textContent = error;
        input.setAttribute("aria-invalid", String(Boolean(error)));
        return !error;
    }

    form.addEventListener("input", event => {
        const errorMessage = form.querySelector(`[data-error-for="${event.target.id}"]`);
        if (errorMessage) {
            errorMessage.textContent = "";
            event.target.setAttribute("aria-invalid", "false");
        }
    });

    backButton.addEventListener("click", () => {
        if (currentStep > 0) {
            showStep(currentStep - 1);
        }
    });

    nextButton.addEventListener("click", () => {
        if (!validateCurrentStep()) {
            steps[currentStep].querySelector("input").focus();
            return;
        }

        if (currentStep < steps.length - 1) {
            showStep(currentStep + 1);
            return;
        }

        const formData = new FormData(form);
        summary.textContent = `Name: ${formData.get("name")} | Email: ${formData.get("email")} | Password: ${"*".repeat(String(formData.get("password")).length)}`;
        summary.hidden = false;
        form.hidden = true;
    });
})();
