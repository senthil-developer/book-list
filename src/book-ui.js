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
      <td><a href="#" class="btn btn-danger btn-sm delete" data-isbn=${book.isbn}>X</a></td>
    `;

    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      const isbn = el.getAttribute("data-isbn");
      el.parentElement.parentElement.remove();
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
