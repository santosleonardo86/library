const myLibrary = [];

function Book(title, author, numberOfPages, bookRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = function () { return crypto.randomUUID(); }
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookRead = function () { return !bookRead ? 'not read yet' : 'read' };
  this.info = function () {
    return `${title} by ${author}, ${numberOfPages} pages, ${this.bookRead()}.\nBook ID: ${this.id()}`
  };
}

function AddBookToLibrary(id, title, author, numberOfPages, boookRead, info) {
  // take params, create a book then store it in the array
  Book.call(this, id, title, author, numberOfPages, boookRead, info);
}

Object.setPrototypeOf(Book.prototype, AddBookToLibrary.prototype)

const book1 = new Book('Moby Dick', 'Herman Melville', '378', true);
const book2 = new Book('Teste', 'Teste', '500', false);
console.log(book1.info());
myLibrary.push(book1, book2)
console.log(myLibrary);