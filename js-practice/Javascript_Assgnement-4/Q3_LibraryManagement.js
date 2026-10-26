(() => {
    // Books track whether they are currently available to borrow.
    class Book {
        constructor(title, author, isbn, isIssued = false) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            this.isIssued = isIssued;
        }

        issueBook() {
            if (this.isIssued) return false;
            this.isIssued = true;
            return true;
        }

        returnBook() {
            if (!this.isIssued) return false;
            this.isIssued = false;
            return true;
        }
    }

    const books = [
        new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
        new Book("Pride and Prejudice", "Jane Austen", "9780141439518"),
        new Book("Clean Code", "Robert C. Martin", "9780132350884", true)
    ];
    const app = document.querySelector("#q3-app");
    const list = document.createElement("ul");
    const form = document.createElement("form");
    form.innerHTML = `
        <div class="field">
            <label for="book-isbn">ISBN</label>
            <input id="book-isbn" name="isbn" required>
        </div>
        <button type="submit">Issue book</button>
    `;
    const message = document.createElement("p");
    message.className = "result";
    message.setAttribute("aria-live", "polite");
    app.append(list, form, message);

    function renderBooks() {
        list.replaceChildren();
        const availableBooks = books.filter(book => !book.isIssued);
        if (availableBooks.length === 0) {
            list.textContent = "No books are currently available.";
            return;
        }

        for (const book of availableBooks) {
            const item = document.createElement("li");
            item.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            list.append(item);
        }
    }

    renderBooks();
    form.addEventListener("submit", event => {
        event.preventDefault();
        const isbn = form.elements.isbn.value.trim();
        const book = books.find(item => item.isbn === isbn);

        if (!book) {
            message.textContent = "No book found with that ISBN.";
        } else if (!book.issueBook()) {
            message.textContent = "That book is already issued.";
        } else {
            message.textContent = `Issued: ${book.title}.`;
            renderBooks();
        }
    });
})();