(() => {
    const app = document.querySelector("#q7-app");
    const form = document.createElement("form");
    form.noValidate = true;
    form.innerHTML = `
        <div class="field">
            <label for="login-username">Username</label>
            <input id="login-username" name="username" autocomplete="username">
            <span class="error-message" data-error-for="username" aria-live="polite"></span>
        </div>
        <div class="field">
            <label for="login-password">Password</label>
            <input id="login-password" name="password" type="password" autocomplete="current-password">
            <span class="error-message" data-error-for="password" aria-live="polite"></span>
        </div>
        <button type="submit">Validate login</button>
    `;
    const result = document.createElement("p");
    result.className = "result";
    result.setAttribute("aria-live", "polite");
    app.append(form, result);

    form.addEventListener("submit", event => {
        event.preventDefault();
        const username = form.elements.username.value;
        const password = form.elements.password.value;
        const usernameIsValid = /^.{5,}$/.test(username);
        const errors = {
            username: usernameIsValid ? "" : "Username must be at least 5 characters.",
            password: ""
        };

        if (password.length < 8) errors.password = "Password must be at least 8 characters.";
        else if (!/[0-9]/.test(password)) errors.password = "Password must include a number.";
        else if (!/[A-Z]/.test(password)) errors.password = "Password must include an uppercase letter.";
        else if (!/[a-z]/.test(password)) errors.password = "Password must include a lowercase letter.";
        else if (!/[^A-Za-z0-9]/.test(password)) errors.password = "Password must include a special character.";

        for (const fieldName of Object.keys(errors)) {
            const input = form.elements[fieldName];
            const valid = errors[fieldName] === "";
            input.classList.toggle("valid", valid);
            input.classList.toggle("invalid", !valid);
            form.querySelector(`[data-error-for="${fieldName}"]`).textContent = errors[fieldName];
        }

        result.textContent = Object.values(errors).every(message => message === "")
            ? "Login details are valid."
            : "Please correct the errors above.";
    });
})();