export class Store {
  static getBooks() {
    let books = [];
    if (localStorage.getItem("books")) {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(el) {
    const books = Store.getBooks();
    books.push(el);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn === isbn) {
        books.splice(i, 1);
        break;
      }
    }

    localStorage.setItem("books", JSON.stringify(books));
  }
}
