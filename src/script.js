import { Book } from "./book.js";
import { BookUI } from "./book-ui.js";
import { Toast } from "./toast.js";
import { Store } from "./store.js";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#count").textContent = Book.count();
  BookUI.displayBooks();
});

const bookForm = document.querySelector("#book-form");

const toast = new Toast(bookForm);
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = bookForm.querySelector("#title").value;
  const author = bookForm.querySelector("#author").value;
  const isbn = bookForm.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    toast.danger("Please fill in all fields");
    return;
  }

  const book = new Book(title, author, isbn);

  BookUI.addBookToList(book);

  Store.addBook(book);

  toast.success("Book added successfully");

  document.querySelector("#count").textContent = Book.count();
  BookUI.clearFields(bookForm);
});

document.querySelector("#book-list").onclick = (e) => {
  if (e.target.classList.contains("delete")) {
    BookUI.deleteBook(e.target);
    toast.success("Book removed successfully");
    document.querySelector("#count").textContent = Book.count();
  }
};
