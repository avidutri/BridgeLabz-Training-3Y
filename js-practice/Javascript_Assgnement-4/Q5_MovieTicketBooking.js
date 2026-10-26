(() => {
    const app = document.querySelector("#q5-app");
    const form = document.createElement("form");
    form.noValidate = true;
    form.innerHTML = `
        <div class="field">
            <label for="booking-name">Name</label>
            <input id="booking-name" name="name" autocomplete="name">
            <span class="error-message" data-error-for="name" aria-live="polite"></span>
        </div>
        <div class="field">
            <label for="booking-email">Email</label>
            <input id="booking-email" name="email" type="email" autocomplete="email">
            <span class="error-message" data-error-for="email" aria-live="polite"></span>
        </div>
        <div class="field">
            <label for="booking-seats">Seats (1-10)</label>
            <input id="booking-seats" name="seats" type="number" min="1" max="10">
            <span class="error-message" data-error-for="seats" aria-live="polite"></span>
        </div>
        <button type="submit">Book tickets</button>
    `;
    const result = document.createElement("pre");
    result.className = "result";
    result.setAttribute("aria-live", "polite");
    app.append(form, result);

    const validators = {
        name: value => /^[A-Za-z]+$/.test(value.trim()),
        email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        seats: value => Number.isInteger(Number(value)) && Number(value) >= 1 && Number(value) <= 10
    };
    const messages = {
        name: "Use letters only.",
        email: "Enter a valid email address.",
        seats: "Choose a whole number from 1 to 10."
    };

    form.addEventListener("submit", event => {
        event.preventDefault();
        const bookingInfo = {
            name: form.elements.name.value.trim(),
            email: form.elements.email.value.trim(),
            seats: Number(form.elements.seats.value)
        };
        let isValid = true;

        for (const [fieldName, validator] of Object.entries(validators)) {
            const input = form.elements[fieldName];
            const value = fieldName === "seats" ? input.value : input.value.trim();
            const valid = validator(value);
            input.classList.toggle("valid", valid);
            input.classList.toggle("invalid", !valid);
            form.querySelector(`[data-error-for="${fieldName}"]`).textContent = valid ? "" : messages[fieldName];
            isValid = isValid && valid;
        }

        result.textContent = isValid
            ? `Booking confirmed\nName: ${bookingInfo.name}\nEmail: ${bookingInfo.email}\nSeats: ${bookingInfo.seats}`
            : "Please correct the highlighted fields.";
        if (isValid) console.log("Booking info:", bookingInfo);
    });
})();