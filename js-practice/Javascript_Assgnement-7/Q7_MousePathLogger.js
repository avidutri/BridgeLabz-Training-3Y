(() => {
    const box = document.querySelector("#mouse-box");
    const coordinates = document.querySelector("#mouse-coordinates");

    box.addEventListener("mousemove", event => {
        coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
    });

    box.addEventListener("dblclick", event => {
        const boxBounds = box.getBoundingClientRect();
        const dot = document.createElement("span");
        dot.className = "mouse-dot";
        dot.setAttribute("aria-hidden", "true");
        dot.style.left = `${event.clientX - boxBounds.left - box.clientLeft}px`;
        dot.style.top = `${event.clientY - boxBounds.top - box.clientTop}px`;
        box.append(dot);
    });
})();
