import { Store } from "./store.js";

export class Book {
  static #count = Store.getBooks().length || 0;
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    Book.#count++;
  }

  static count() {
    return Book.#count;
  }
  static deleteCount() {
    Book.#count--;
  }
}
