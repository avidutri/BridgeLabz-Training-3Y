(() => {
    const form = document.querySelector("#product-form");
    const productInput = document.querySelector("#product-input");
    const productList = document.querySelector("#product-list");
    let editingItem = null;

    function saveEdit(item) {
        const editor = item.querySelector(".product-editor");
        const productName = editor.value.trim();

        if (productName) {
            const name = document.createElement("span");
            name.className = "product-name";
            name.textContent = productName;
            editor.replaceWith(name);
        } else {
            editor.closest("li").remove();
        }

        item.querySelector('[data-action="edit"]').textContent = "Edit";
        editingItem = null;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        const productName = productInput.value.trim();

        if (!productName) {
            productInput.focus();
            return;
        }

        const item = document.createElement("li");
        item.className = "product-item";

        const name = document.createElement("span");
        name.className = "product-name";
        name.textContent = productName;

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.dataset.action = "edit";
        editButton.textContent = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.dataset.action = "delete";
        deleteButton.className = "button-danger";
        deleteButton.textContent = "Delete";

        item.append(name, editButton, deleteButton);
        productList.append(item);
        productInput.value = "";
        productInput.focus();
    });

    productList.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button || !productList.contains(button)) {
            return;
        }

        const item = button.closest(".product-item");

        if (button.dataset.action === "delete") {
            if (editingItem === item) {
                editingItem = null;
            }
            item.remove();
            return;
        }

        if (editingItem && editingItem !== item) {
            saveEdit(editingItem);
        }

        if (editingItem === item) {
            saveEdit(item);
            return;
        }

        const name = item.querySelector(".product-name");
        const editor = document.createElement("input");
        editor.className = "product-editor";
        editor.type = "text";
        editor.setAttribute("aria-label", "Edit product name");
        editor.value = name.textContent;
        editor.defaultValue = name.textContent;
        name.replaceWith(editor);
        button.textContent = "Save";
        editingItem = item;
        editor.focus();
        editor.select();
    });

    productList.addEventListener("keydown", event => {
        if (!event.target.matches(".product-editor")) {
            return;
        }

        if (event.key === "Enter") {
            event.preventDefault();
            saveEdit(event.target.closest(".product-item"));
        } else if (event.key === "Escape") {
            const item = event.target.closest(".product-item");
            const originalName = document.createElement("span");
            originalName.className = "product-name";
            originalName.textContent = event.target.defaultValue;
            event.target.replaceWith(originalName);
            item.querySelector('[data-action="edit"]').textContent = "Edit";
            editingItem = null;
        }
    });

    document.addEventListener("click", event => {
        if (editingItem && !editingItem.contains(event.target)) {
            saveEdit(editingItem);
        }
    });
})();
