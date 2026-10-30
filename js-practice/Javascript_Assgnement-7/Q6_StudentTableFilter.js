(() => {
    const searchInput = document.querySelector("#student-search");
    const tableBody = document.querySelector("#student-table tbody");
    const noResults = document.querySelector("#no-students");
    const studentRows = [...tableBody.rows];

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLocaleLowerCase();
        let visibleRows = 0;

        studentRows.forEach(row => {
            const matches = row.textContent.toLocaleLowerCase().includes(searchTerm);
            row.hidden = !matches;

            if (matches) {
                visibleRows++;
            }
        });

        noResults.hidden = visibleRows !== 0;
    });
})();
