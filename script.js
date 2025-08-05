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

function addBookToLibrary(id, title, author, numberOfPages, bookRead) {
  // take params, create a book then store it in the array
  
}