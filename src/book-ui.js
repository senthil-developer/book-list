import { Book } from "./book.js";
import { Store } from "./store.js";
export class BookUI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => BookUI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><button class="btn btn-danger btn-sm delete" 
         data-isbn=${book.isbn}>X</button></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    const isbn = el.getAttribute("data-isbn");
    const row = document
      .querySelector(`button[data-isbn="${isbn}"]`)
      .closest("tr");
    if (row) {
      row.remove();
      Book.deleteCount();
      Store.removeBook(isbn);
    }
  }

  static clearFields(form) {
    form.querySelectorAll("input, select").forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio")
        input.checked = false;
      else input.value = "";
    });
  }
}
