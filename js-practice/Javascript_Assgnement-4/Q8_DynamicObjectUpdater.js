(() => {
    const user = { name: "John", email: "john@mail.com", age: 21 };
    const app = document.querySelector("#q8-app");
    const form = document.createElement("form");
    form.innerHTML = `
        <div class="field">
            <label for="user-name">Name</label>
            <input id="user-name" name="name" required>
        </div>
        <div class="field">
            <label for="user-email">Email</label>
            <input id="user-email" name="email" type="email" required>
        </div>
        <div class="field">
            <label for="user-age">Age</label>
            <input id="user-age" name="age" type="number" min="0" required>
        </div>
        <button type="submit">Update user</button>
    `;
    const details = document.createElement("pre");
    details.className = "result";
    details.setAttribute("aria-live", "polite");
    app.append(form, details);

    for (const [key, value] of Object.entries(user)) {
        form.elements[key].value = value;
    }

    function renderUser() {
        details.textContent = JSON.stringify(user, null, 2);
    }

    renderUser();
    form.addEventListener("submit", event => {
        event.preventDefault();
        Object.assign(user, {
            name: form.elements.name.value.trim(),
            email: form.elements.email.value.trim(),
            age: Number(form.elements.age.value)
        });
        renderUser();
        console.log("Updated user:", user);
    });
})();