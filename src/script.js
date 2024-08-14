import { Book } from "./book.js";
import { BookUI } from "./book-ui.js";
import { AlertManager } from "./alert-message.js";

document.addEventListener("DOMContentLoaded", () => {
  BookUI.displayBooks();
});

const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookForm.querySelector("#title").value;
  const author = bookForm.querySelector("#author").value;
  const isbn = bookForm.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    const alert = new AlertManager(bookForm);
    alert.danger("Please fill in all fields");
    return;
  }

  BookUI.clearAlerts(bookForm);

  const book = new Book(title, author, isbn);

  BookUI.addBookToList(book);

  BookUI.clearFields(bookForm);
});

document.querySelector("#book-list").onclick = (e) => {
  BookUI.deleteBook(e.target);
};
