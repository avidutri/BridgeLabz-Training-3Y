(() => {
    // Build form controls from field descriptions and collect submitted values.
    class FormBuilder {
        constructor(fields, container) {
            this.fields = fields;
            this.container = container;
            this.form = document.createElement("form");
            this.render();
        }

        render() {
            this.form.innerHTML = this.fields.map((field, index) => `
                <div class="field">
                    <label for="builder-field-${index}">${field.label}</label>
                    <input id="builder-field-${index}" name="${field.name}" type="${field.type}" required>
                </div>
            `).join("") + `<button type="submit">Submit</button>`;

            const result = document.createElement("pre");
            result.className = "result";
            result.setAttribute("aria-live", "polite");
            this.form.addEventListener("submit", event => {
                event.preventDefault();
                result.textContent = JSON.stringify(this.getFormData(), null, 2);
            });
            this.container.append(this.form, result);
        }

        getFormData() {
            return Object.fromEntries(new FormData(this.form).entries());
        }
    }

    new FormBuilder([
        { name: "username", type: "text", label: "Username" },
        { name: "email", type: "email", label: "Email" },
        { name: "role", type: "text", label: "Role" }
    ], document.querySelector("#q4-app"));
})();