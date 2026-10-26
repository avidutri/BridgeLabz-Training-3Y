(() => {
    const app = document.querySelector("#q2-app");
    const fields = [
        { name: "name", label: "Name", type: "text", pattern: /^[A-Za-z]+$/, message: "Use letters only." },
        { name: "email", label: "Email", type: "email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
        { name: "phone", label: "Phone", type: "tel", pattern: /^\d{10}$/, message: "Enter exactly 10 digits." },
        { name: "password", label: "Password", type: "password", pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Include an uppercase letter, a number, and a special character." }
    ];

    const form = document.createElement("form");
    form.noValidate = true;
    form.innerHTML = fields.map(field => `
        <div class="field">
            <label for="student-${field.name}">${field.label}</label>
            <input id="student-${field.name}" name="${field.name}" type="${field.type}" autocomplete="off">
            <span class="error-message" data-error-for="${field.name}" aria-live="polite"></span>
        </div>
    `).join("") + `<button type="submit">Register student</button>`;
    const result = document.createElement("p");
    result.className = "result";
    result.setAttribute("aria-live", "polite");
    app.append(form, result);

    form.addEventListener("submit", event => {
        event.preventDefault();
        let isValid = true;

        for (const field of fields) {
            const input = form.elements[field.name];
            const valid = field.pattern.test(input.value.trim());
            input.classList.toggle("valid", valid);
            input.classList.toggle("invalid", !valid);
            form.querySelector(`[data-error-for="${field.name}"]`).textContent = valid ? "" : field.message;
            isValid = isValid && valid;
        }

        result.textContent = isValid ? "Registration details are valid." : "Please correct the highlighted fields.";
    });
})();